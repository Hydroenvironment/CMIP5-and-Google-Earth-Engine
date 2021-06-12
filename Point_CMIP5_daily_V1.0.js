//SCRIPT PARA DESCARGAR LOS BASES DE DATOS DE MODELOS DE CIRCULACIÓN GENERAL (GCM's) 
//COLECCIÓN DEL PRODUCTO NASA NEX GDDP A ESCALA DIARIA
//Insertar coordenadas geográficas de la estación (punto) de interés
//Cambia el nombre de la variable "estac" para tener una carpeta en Google Drive con el nombre de cada estación

//INGRESAMOS DATOS DE LA ESTACIÓN (PUNTO) EN ESTUDIO
//Insertar coordenadas geográficas.
//Cambia el nombre de la variable "estac" para tener una carpeta en Google Drive 
//con el nombre de cada estación que desees estudiar.
var estacname = 'AGUADA BLANCA'
var point = ee.Geometry.Point([-71.3332532,-16.226843]);
Map.addLayer(point);
Map.centerObject(point,6);

//DEFINIMOS LOS PERÍODOS PARA LA EXTRACCIÓN 
//ESCENARIOS RCP 4.5 Y RCP 8.5
var startDatehist = ee.Date('1950-01-01');
var endDatehist = ee.Date('2005-12-31');
//PERÍODO HISTÓRICO
var startDate = ee.Date('2006-01-01');
var endDate = ee.Date('2099-12-31');

//INGRESAMOS DATOS DEL LA COLECCIÓN A USAR PARA EXTRACCIÓN DE DATOS
var dataset = ee.ImageCollection('NASA/NEX-GDDP')
                  .filter(ee.Filter.date(startDate, endDate));
var datasethist = ee.ImageCollection('NASA/NEX-GDDP')
                  .filter(ee.Filter.date(startDatehist, endDatehist));

//**************SOLO HABILITAR PARA VISUALIZACIÓN*******************
/*
var maximumAirTemperatureVis = {
  min: 240.0,
  max: 300.0,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};
Map.setCenter(67, 45, 3.0);
Map.addLayer(
    maximumAirTemperature, maximumAirTemperatureVis, 'Maxmum Air Temperature');
*/
//*******************************************************************

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//EXTRACCIÓN DE DATOS DE TEMPERATURA MÁXIMA DIARIA  

//ESCENARIOS RCP 4.5 Y 8.5
// get projection information
var maximumAirTemperature = dataset.select('tasmax');
var proj = maximumAirTemperature.first().projection();
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

//RANGO HISTÓRICO
// calculate number of days to map and extract data for
var maximumAirTemperature = datasethist.select('tasmax');
var proj = maximumAirTemperature.first().projection();
// calculate number of days to map and extract data for
var nhist = endDatehist.difference(startDatehist,'day').subtract(1);
// map over each date and extract all climate model values
var timeserieshist = ee.FeatureCollection(
  ee.List.sequence(0,nhist).map(function(i){
    var thist1 = startDatehist.advance(i,'day');
    var thist2 = thist1.advance(1,'day');
    var feature = ee.Feature(point);
    var dailyCollhist = maximumAirTemperature.filterDate(thist1, thist2);
    var dailyImghist = dailyCollhist.toBands();
    // rename bands to handle different names by date
    var bandshist = dailyImghist.bandNames();
    var renamedhist = bandshist.map(function(b){
      var splithist = ee.String(b).split('_');
      return ee.String(splithist.get(0)).cat('_').cat(ee.String(splithist.get(1)));
    });
    // extract the data for the day and add time information
    var dicthist = dailyImghist.rename(renamedhist).reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: point,
      scale: proj.nominalScale()
    }).combine(
      ee.Dictionary({'system:time_start':thist1.millis(),'isodate':thist1.format('YYYY-MM-dd')})
    );
    return ee.Feature(point,dicthist);
  })
);

//******ÚNICAMENTE HABILITAR PARA FINES DE VISUALIZACIÓN************
//print(timeseries);

// get properties to chart (all climate models)
//var props = timeseries.first().propertyNames().removeAll(['system:time_start','system:index','isodate']);

// Make a chart of the results.
//var chart = ui.Chart.feature.byFeature(timeseries, 'system:time_start', props.getInfo());
//print(chart);
//****************************************************************

//Exportamos en formato .csv los datos de los escenarios RCP  4.5 y 8.5
Export.table.toDrive(timeseries,
'RCP4585TASMAX', // Name of the task
estacname, // Name of the folder in Google Drive to be created
'RCP4585TASMAX'); // Name of the file to be generated with the downloaded datasets

//Exportamos en formato .csv los datos del período histórico
Export.table.toDrive(timeserieshist,
'HISTASMAX', // Name of the task
estacname, // Name of the folder in Google Drive to be created
'HISTASMAX'); // Name of the file to be generated with the downloaded datasets

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//EXTRACCIÓN DE DATOS DE TEMPERATURA MÍNIMA DIARIA

//ESCENARIOS RCP 4.5 Y 8.5
// get projection information
var minimumAirTemperature = dataset.select('tasmin');
var proj = minimumAirTemperature.first().projection();
// calculate number of days to map and extract data for
var n = endDate.difference(startDate,'day').subtract(1);
// map over each date and extract all climate model values
var timeseries = ee.FeatureCollection(
  ee.List.sequence(0,n).map(function(i){
    var t1 = startDate.advance(i,'day');
    var t2 = t1.advance(1,'day');
    var feature = ee.Feature(point);
    var dailyColl = minimumAirTemperature.filterDate(t1, t2);
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

//RANGO HISTÓRICO
// calculate number of days to map and extract data for
var minimumAirTemperature = datasethist.select('tasmin');
var proj = minimumAirTemperature.first().projection();
// calculate number of days to map and extract data for
var nhist = endDatehist.difference(startDatehist,'day').subtract(1);
// map over each date and extract all climate model values
var timeserieshist = ee.FeatureCollection(
  ee.List.sequence(0,nhist).map(function(i){
    var thist1 = startDatehist.advance(i,'day');
    var thist2 = thist1.advance(1,'day');
    var feature = ee.Feature(point);
    var dailyCollhist = minimumAirTemperature.filterDate(thist1, thist2);
    var dailyImghist = dailyCollhist.toBands();
    // rename bands to handle different names by date
    var bandshist = dailyImghist.bandNames();
    var renamedhist = bandshist.map(function(b){
      var splithist = ee.String(b).split('_');
      return ee.String(splithist.get(0)).cat('_').cat(ee.String(splithist.get(1)));
    });
    // extract the data for the day and add time information
    var dicthist = dailyImghist.rename(renamedhist).reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: point,
      scale: proj.nominalScale()
    }).combine(
      ee.Dictionary({'system:time_start':thist1.millis(),'isodate':thist1.format('YYYY-MM-dd')})
    );
    return ee.Feature(point,dicthist);
  })
);

//Exportamos en formato .csv los datos de los escenarios RCP  4.5 y 8.5
Export.table.toDrive(timeseries,
'RCP4585TASMIN', // Name of the task
estacname, // Name of the folder in Google Drive to be created
'RCP4585TASMIN'); // Name of the file to be generated with the downloaded datasets

//Exportamos en formato .csv los datos del período histórico
Export.table.toDrive(timeserieshist,
'HISTASMIN', // Name of the task
estacname, // Name of the folder in Google Drive to be created
'HISTASMIN'); // Name of the file to be generated with the downloaded datasets

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//EXTRACCIÓN DE DATOS DE PRECIPITACIÓN DIARIA
//La variable "pr" representa la precipitación media diaria en la superficie, 
//la cual incluye tanto fases líquidas como sólidas de todo tipo de nubes, 
//tanto a gran escala como convectivas.

//ESCENARIOS RCP 4.5 Y 8.5
// get projection information
var precipitation = dataset.select('pr');
var proj = precipitation.first().projection();
// calculate number of days to map and extract data for
var n = endDate.difference(startDate,'day').subtract(1);
// map over each date and extract all climate model values
var timeseries = ee.FeatureCollection(
  ee.List.sequence(0,n).map(function(i){
    var t1 = startDate.advance(i,'day');
    var t2 = t1.advance(1,'day');
    var feature = ee.Feature(point);
    var dailyColl = precipitation.filterDate(t1, t2);
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

//RANGO HISTÓRICO
var precipitation = datasethist.select('pr');
var proj = precipitation.first().projection();
// calculate number of days to map and extract data for
var nhist = endDatehist.difference(startDatehist,'day').subtract(1);
// map over each date and extract all climate model values
var timeserieshist = ee.FeatureCollection(
  ee.List.sequence(0,nhist).map(function(i){
    var thist1 = startDatehist.advance(i,'day');
    var thist2 = thist1.advance(1,'day');
    var feature = ee.Feature(point);
    var dailyCollhist = precipitation.filterDate(thist1, thist2);
    var dailyImghist = dailyCollhist.toBands();
    // rename bands to handle different names by date
    var bandshist = dailyImghist.bandNames();
    var renamedhist = bandshist.map(function(b){
      var splithist = ee.String(b).split('_');
      return ee.String(splithist.get(0)).cat('_').cat(ee.String(splithist.get(1)));
    });
    // extract the data for the day and add time information
    var dicthist = dailyImghist.rename(renamedhist).reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: point,
      scale: proj.nominalScale()
    }).combine(
      ee.Dictionary({'system:time_start':thist1.millis(),'isodate':thist1.format('YYYY-MM-dd')})
    );
    return ee.Feature(point,dicthist);
  })
);

//Exportamos en formato .csv los datos de los escenarios RCP  4.5 y 8.5
Export.table.toDrive(timeseries,
'RCP4585PR', // Name of the task
estacname, // Name of the folder in Google Drive to be created
'RCP4585PR'); // Name of the file to be generated with the downloaded datasets

//Exportamos en formato .csv los datos del período histórico
Export.table.toDrive(timeserieshist,
'HISTPR', // Name of the task
estacname, // Name of the folder in Google Drive to be created
'HISTPR'); // Name of the file to be generated with the downloaded datasets
