//GOOGLE EARTH ENGINE CODE TO DOWNLOAD GCM CLIMATE MODEL DATASETS AT DAILY SCALE - NASA NEX GDDP
//Insert geographic coordinates of the points (stations)
//Change the name of the variable "estac" to have a folder in Google Drive with each station name
var p1 = ee.Geometry.Point([-71.6835999999999, -13.9168999989999])
var pts = ee.FeatureCollection(ee.List([ee.Feature(p1)]))
var estac = 'ESTACION'

/////////////////////////////////////////////////////////////////////////////////////
//1st GCM to download
var GCMModel = 'ACCESS1-0'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//2ND GCM TO DOWNLOAD
var GCMModel = 'bcc-csm1-1'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//3RDD GCM TO DOWNLOAD
var GCMModel = 'BNU-ESM'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//4TH GCM TO DOWNLOAD
var GCMModel = 'CanESM2'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//5TH GCM TO DOWNLOAD
var GCMModel = 'CCSM4'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//6TH GCM TO DOWNLOAD
var GCMModel = 'CESM1-BGC'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//7TH GCM TO DOWNLOAD
var GCMModel = 'CNRM-CM5'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
"ACOMAYO", // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//8TH GCM TO DOWNLOAD
var GCMModel = 'CSIRO-Mk3-6-0'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//9TH GCM TO DOWNLOAD
var GCMModel = 'GFDL-CM3'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
"ACOMAYO", // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//10TH GCM TO DOWNLOAD
var GCMModel = 'GFDL-ESM2G'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//11TH GCM TO DOWNLOAD
var GCMModel = 'GFDL-ESM2M'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//12TH GCM TO DOWNLOAD
var GCMModel = 'inmcm4'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//13TH GCM TO DOWNLOAD
var GCMModel = 'IPSL-CM5A-LR'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//14TH GCM TO DOWNLOAD
var GCMModel = 'IPSL-CM5A-MR'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//15TH GCM TO DOWNLOAD
var GCMModel = 'MIROC-ESM'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//16TH GCM TO DOWNLOAD
var GCMModel = 'MIROC-ESM-CHEM'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
"ACOMAYO", // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//17TH GCM TO DOWNLOAD
var GCMModel = 'MIROC5'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets



////////////////////////////////////////////////////////////////////////////////////////////////
//18TH GCM TO DOWNLOAD
var GCMModel = 'MPI-ESM-LR'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//19TH GCM TO DOWNLOAD
var GCMModel = 'MPI-ESM-MR'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//20TH GCM TO DOWNLOAD
var GCMModel = 'MRI-CGCM3'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets


////////////////////////////////////////////////////////////////////////////////////////////////
//19TH GCM TO DOWNLOAD
var GCMModel = 'NorESM1-M'

//IMPORT DATA FROM NASA NEX //NASA NEX Climate change products at daily scale
//IMPORTNG RCP 4.5 SCENARIO//
var GCM = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM2 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM3 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM4 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM5 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM6 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM7 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM8 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp45') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG RCP 8.5 SCENARIO//
var GCM9 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2006,01,01), ee.Date.fromYMD(2017,12,31)) //Indicate the date at daily scale

var GCM10 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2018,01,01), ee.Date.fromYMD(2029,12,31)) //Indicate the date at daily scale

var GCM11 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2030,01,01), ee.Date.fromYMD(2041,12,31)) //Indicate the date at daily scale

var GCM12 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2042,01,01), ee.Date.fromYMD(2053,12,31)) //Indicate the date at daily scale

var GCM13 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2054,01,01), ee.Date.fromYMD(2065,12,31)) //Indicate the date at daily scale

var GCM14 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2066,01,01), ee.Date.fromYMD(2077,12,31)) //Indicate the date at daily scale

var GCM15 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2078,01,01), ee.Date.fromYMD(2089,12,31)) //Indicate the date at daily scale

var GCM16 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'rcp85') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(2090,01,01), ee.Date.fromYMD(2099,12,31)) //Indicate the date at daily scale

//IMPORTNG HISTORICAL PERIOD//
var GCM17 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1950,01,01), ee.Date.fromYMD(1961,12,31)) //Indicate the date at daily scale

var GCM18 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1962,01,01), ee.Date.fromYMD(1973,12,31)) //Indicate the date at daily scale

var GCM19 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1974,01,01), ee.Date.fromYMD(1985,12,31)) //Indicate the date at daily scale

var GCM20 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1986,01,01), ee.Date.fromYMD(1997,12,31)) //Indicate the date at daily scale

var GCM21 = ee.ImageCollection('NASA/NEX-GDDP')
.filterMetadata('model', 'equals', GCMModel) // Indicate GCM climate model to download
.filterMetadata('scenario', 'equals', 'historical') // Indicate RCP radiative scenario
.filterDate(ee.Date.fromYMD(1998,01,01), ee.Date.fromYMD(2005,12,31)) //Indicate the date at daily scale

//CREATING FUNCTION TO EXTRACT AND ITERATE USING THE COLLECTION
// Empty Collection to fill
var ft = ee.FeatureCollection(ee.List([]))

var fill = function(img, ini) {
  // type cast
  var inift = ee.FeatureCollection(ini)

  // gets the values for the points in the current img
  var ft2 = img.reduceRegions(pts, ee.Reducer.first(),27700)

  // gets the date of the img
  var date = img.date().format()

  // writes the date in each feature
  var ft3 = ft2.map(function(f){return f.set("date", date)})

  // merges the FeatureCollections
  return inift.merge(ft3)
}

// Iterates over the ImageCollection
var newft1 = ee.FeatureCollection(GCM.iterate(fill, ft))

// Iterates over the ImageCollection
var newft2 = ee.FeatureCollection(GCM2.iterate(fill, ft))

// Iterates over the ImageCollection
var newft3 = ee.FeatureCollection(GCM3.iterate(fill, ft))

// Iterates over the ImageCollection
var newft4 = ee.FeatureCollection(GCM4.iterate(fill, ft))

// Iterates over the ImageCollection
var newft5= ee.FeatureCollection(GCM5.iterate(fill, ft))

// Iterates over the ImageCollection
var newft6 = ee.FeatureCollection(GCM6.iterate(fill, ft))

// Iterates over the ImageCollection
var newft7 = ee.FeatureCollection(GCM7.iterate(fill, ft))

// Iterates over the ImageCollection
var newft8 = ee.FeatureCollection(GCM8.iterate(fill, ft))

// Iterates over the ImageCollection
var newft9 = ee.FeatureCollection(GCM9.iterate(fill, ft))

// Iterates over the ImageCollection
var newft10 = ee.FeatureCollection(GCM10.iterate(fill, ft))

// Iterates over the ImageCollection
var newft11 = ee.FeatureCollection(GCM11.iterate(fill, ft))

// Iterates over the ImageCollection
var newft12 = ee.FeatureCollection(GCM12.iterate(fill, ft))

// Iterates over the ImageCollection
var newft13 = ee.FeatureCollection(GCM13.iterate(fill, ft))

// Iterates over the ImageCollection
var newft14 = ee.FeatureCollection(GCM14.iterate(fill, ft))

// Iterates over the ImageCollection
var newft15 = ee.FeatureCollection(GCM15.iterate(fill, ft))

// Iterates over the ImageCollection
var newft16 = ee.FeatureCollection(GCM16.iterate(fill, ft))

// Iterates over the ImageCollection
var newft17 = ee.FeatureCollection(GCM17.iterate(fill, ft))

// Iterates over the ImageCollection
var newft18 = ee.FeatureCollection(GCM18.iterate(fill, ft))

// Iterates over the ImageCollection
var newft19 = ee.FeatureCollection(GCM19.iterate(fill, ft))

// Iterates over the ImageCollection
var newft20 = ee.FeatureCollection(GCM20.iterate(fill, ft))

// Iterates over the ImageCollection
var newft21 = ee.FeatureCollection(GCM21.iterate(fill, ft))

//EXPORTING RCP 4.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft1,
estac+'-'+GCMModel+'-RCP45-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft2,
estac+'-'+GCMModel+'-RCP45-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft3,
estac+'-'+GCMModel+'-RCP45-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft4,
estac+'-'+GCMModel+'-RCP45-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft5,
estac+'-'+GCMModel+'-RCP45-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft6,
estac+'-'+GCMModel+'-RCP45-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft7,
estac+'-'+GCMModel+'-RCP45-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft8,
estac+'-'+GCMModel+'-RCP45-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP45-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING RCP 8.5 SCENARIO FILES TO GDRIVE
Export.table.toDrive(newft9,
estac+'-'+GCMModel+'-RCP85-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft10,
estac+'-'+GCMModel+'-RCP85-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft11,
estac+'-'+GCMModel+'-RCP85-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft12,
estac+'-'+GCMModel+'-RCP85-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft13,
estac+'-'+GCMModel+'-RCP85-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-5') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft14,
estac+'-'+GCMModel+'-RCP85-6', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-6') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft15,
estac+'-'+GCMModel+'-RCP85-7', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-7') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft16,
estac+'-'+GCMModel+'-RCP85-8', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-RCP85-8') // Name of the file to be generated with the downloaded datasets

//EXPORTING HISTORICAL PERIOD FILES TO GDRIVE
Export.table.toDrive(newft17,
estac+'-'+GCMModel+'-HISTORICAL-1', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-1') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft18,
estac+'-'+GCMModel+'-HISTORICAL-2', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-2') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft19,
estac+'-'+GCMModel+'-HISTORICAL-3', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-3') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft20,
estac+'-'+GCMModel+'-HISTORICAL-4', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-4') // Name of the file to be generated with the downloaded datasets

Export.table.toDrive(newft21,
estac+'-'+GCMModel+'-HISTORICAL-5', // Name of the task
estac, // Name of the folder in Google Drive to be created
GCMModel+'-HISTORICAL-5') // Name of the file to be generated with the downloaded datasets
