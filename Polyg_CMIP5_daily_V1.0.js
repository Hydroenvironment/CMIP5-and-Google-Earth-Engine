// specify start and end date
var startDate = ee.Date('2035-01-01');
var endDate = ee.Date('2042-01-01');

// get the dataset between date range and extract band on interest
var dataset = ee.ImageCollection('NASA/NEX-GDDP')
                  .filter(ee.Filter.date(startDate,endDate));
var maximumAirTemperature = dataset.select('tasmax');

// get projection information
var proj = maximumAirTemperature.first().projection();

var tabla = ee.FeatureCollection('users/jmontenegrog/RegPeru_geoWGS84');
//var point = tabla.first().geometry();

var point = tabla.filter(ee.Filter.eq('NOMBDEP', 'PIURA')).geometry()

// calculate number of days to map and extract data for
var n = endDate.difference(startDate,'day').subtract(1);

// map over each date and extract all climate model values
var timeseries = ee.FeatureCollection(
  ee.List.sequence(0,n).map(function(i){
    var t1 = startDate.advance(i,'day');
    var t2 = t1.advance(1,'day');
    var feature = ee.Feature(point);
    var dailyColl = maximumAirTemperature.filterDate(t1, t2);
    var dailyImg = dailyColl.toBands();
    // rename bands to handle different names by date
    var bands = dailyImg.bandNames();
    var renamed = bands.map(function(b){
      var split = ee.String(b).split('_');
      return ee.String(split.get(0)).cat('_').cat(ee.String(split.get(1)));
    });
    // extract the data for the day and add time information
    var dict = dailyImg.rename(renamed).reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: point,
      scale: proj.nominalScale()
    }).combine(
      ee.Dictionary({'system:time_start':t1.millis(),'isodate':t1.format('YYYY-MM-dd')})
    );
    return ee.Feature(point,dict);
  })
);
print(timeseries);

// get properties to chart (all climate models)
var props = timeseries.first().propertyNames().removeAll(['system:time_start','system:index','isodate']);

// Make a chart of the results.
var chart = ui.Chart.feature.byFeature(timeseries, 'system:time_start', props.getInfo());
print(chart);

Map.addLayer(point);
Map.centerObject(point,2);

// export feature collection to CSV
Export.table.toDrive({
  collection: timeseries,
  description: 'NEX-GDDP-timeseries',
  fileFormat: 'CSV',
});
