//SCRIPT FOR EXTRACTION AND DOWNLOADING CMIP5 GCM's MODEL OUTPUTS AT DAILY SCALE//// 
//////NASA-NEX GDDP Earth Exchange Global Daily Downscaled Climate Projections /////
////////////////////////////////////////////////////////////////////////////////////

//INSTRUCTIONS////
//A shapefile is required as an asset. 
//Select the polygon of interest according to the attributes of the asset in line 32.
//Choose "pr", "tasmax" or "tasmin" in meteo variable of line 24.
//Preferably, choose an appropiate name when exporting daily data to Google Drive.
//Historical data is available from 1950 to 2005 and RCP 4.5-8.5 from 2006 to 2099.
//When plotting on the console (line 67), only a few years can be used.
//More information, please check: 
//https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP


// Firstly, you have to specify start and end date.
var startDate = ee.Date('2022-01-01');
var endDate = ee.Date('2023-12-31');

// Calling the collection
var dataset = ee.ImageCollection('NASA/NEX-GDDP')
                  .filter(ee.Filter.date(startDate,endDate));
//Selecting the meteorological variable of interest.
var meteo = dataset.select('tasmax');

// Geting projection information
var proj = meteo.first().projection();

//Including the asset
var tabla = ee.FeatureCollection('users/jmontenegrog/RegPeru_geoWGS84');

//Filtering polygon, you must select the specific attribute
var point = tabla.filter(ee.Filter.eq('NOMBDEP','PIURA')).geometry();

//Total amount of days to map and extract data
var n = endDate.difference(startDate,'day').subtract(1);

// Mapping over each date to extract daily data
var timeseries = ee.FeatureCollection(
  ee.List.sequence(0,n).map(function(i){
    var t1 = startDate.advance(i,'day');
    var t2 = t1.advance(1,'day');
    var feature = ee.Feature(point);
    var dailyColl = meteo.filterDate(t1, t2);
    var dailyImg = dailyColl.toBands();
    // Renaming and handling names
    var bands = dailyImg.bandNames();
    var renamed = bands.map(function(b){
      var split = ee.String(b).split('_');
      return ee.String(split.get(0)).cat('_').cat(ee.String(split.get(1)));
    });
    // Daily extraction and adding time information
    var dict = dailyImg.rename(renamed).reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: point,
      scale: proj.nominalScale()
    }).combine(
      ee.Dictionary({'system:time_start':t1.millis(),'isodate':t1.format('YYYY-MM-dd')})
    );
    return ee.Feature(null,dict);
  })
);
print(timeseries);

// Geting properties to chart for the 21 GCM`s
var props = timeseries.first().propertyNames().removeAll(['system:time_start','system:index','isodate']);

// ACTIVATE IN CASE OF PLOTTING IN GEE CONSOLE
//var chart = ui.Chart.feature.byFeature(timeseries, 'system:time_start', props.getInfo());
//print(chart);

//Ploting selected polygon according to line 32
Map.addLayer(point);
Map.centerObject(point,2);

//ACTIVATE IN CASE OF REMOVING A FEATURE PROPERTY (GCM, date "isodate", "system:time_start" and others)
// Generic Function to remove a property from a feature
//var removeProperty = function(feat, property) {
//  var properties = feat.propertyNames()
//  var selectProperties = properties.filter(ee.Filter.neq('item', property))
//  return feat.select(selectProperties)
//}
// remove property color in each feature
//var ts = timeseries.map(function(feat) {
//  return removeProperty(feat, 'isodate')
//})


// Finally, time to export the extracted data to a csv file!
Export.table.toDrive({
  collection: timeseries,
  description: 'NEX-GDDP-timeseries',
  fileFormat: 'CSV',
});
