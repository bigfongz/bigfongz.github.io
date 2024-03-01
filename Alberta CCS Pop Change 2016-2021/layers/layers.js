var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlbertaCCSPopChange20162021_1 = new ol.format.GeoJSON();
var features_AlbertaCCSPopChange20162021_1 = format_AlbertaCCSPopChange20162021_1.readFeatures(json_AlbertaCCSPopChange20162021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaCCSPopChange20162021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaCCSPopChange20162021_1.addFeatures(features_AlbertaCCSPopChange20162021_1);
var lyr_AlbertaCCSPopChange20162021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlbertaCCSPopChange20162021_1, 
                style: style_AlbertaCCSPopChange20162021_1,
                popuplayertitle: "Alberta CCS Pop Change 2016-2021",
                interactive: true,
    title: 'Alberta CCS Pop Change 2016-2021<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_1.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_2.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_3.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_4.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_5.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_6.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_7.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_8.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_9.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/AlbertaCCSPopChange20162021_1_10.png" /> 0.0 - 0.0<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AlbertaCCSPopChange20162021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AlbertaCCSPopChange20162021_1];
lyr_AlbertaCCSPopChange20162021_1.set('fieldAliases', {'Name': 'Name', 'Pop 2021': 'Pop 2021', 'Pop 2016': 'Pop 2016', 'Change': 'Change', });
lyr_AlbertaCCSPopChange20162021_1.set('fieldImages', {'Name': 'TextEdit', 'Pop 2021': 'TextEdit', 'Pop 2016': 'TextEdit', 'Change': 'TextEdit', });
lyr_AlbertaCCSPopChange20162021_1.set('fieldLabels', {'Name': 'header label - always visible', 'Pop 2021': 'inline label - always visible', 'Pop 2016': 'inline label - always visible', 'Change': 'inline label - always visible', });
lyr_AlbertaCCSPopChange20162021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});