var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1908SaskatchewanProvincialElection_1 = new ol.format.GeoJSON();
var features_1908SaskatchewanProvincialElection_1 = format_1908SaskatchewanProvincialElection_1.readFeatures(json_1908SaskatchewanProvincialElection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1908SaskatchewanProvincialElection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1908SaskatchewanProvincialElection_1.addFeatures(features_1908SaskatchewanProvincialElection_1);
var lyr_1908SaskatchewanProvincialElection_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1908SaskatchewanProvincialElection_1, 
                style: style_1908SaskatchewanProvincialElection_1,
                interactive: true,
    title: '1908 Saskatchewan Provincial Election<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_0.png" /> LIB +1<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_1.png" /> LIB +5<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_2.png" /> LIB +10<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_3.png" /> LIB +15<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_4.png" /> LIB +20<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_5.png" /> LIB +25<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_6.png" /> LIB +30<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_7.png" /> LIB +35<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_8.png" /> LIB +90<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_9.png" /> PR +1<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_10.png" /> PR +5<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_11.png" /> PR +10<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_12.png" /> PR +15<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_13.png" /> PR +20<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_14.png" /> PR +25<br />\
    <img src="styles/legend/1908SaskatchewanProvincialElection_1_15.png" /> PR +30<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_1908SaskatchewanProvincialElection_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1908SaskatchewanProvincialElection_1];
lyr_1908SaskatchewanProvincialElection_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'MLA': 'MLA', 'PR': 'PR', 'LIB': 'LIB', 'IND': 'IND', });
lyr_1908SaskatchewanProvincialElection_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'MLA': 'TextEdit', 'PR': 'TextEdit', 'LIB': 'TextEdit', 'IND': 'TextEdit', });
lyr_1908SaskatchewanProvincialElection_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'MLA': 'header label', 'PR': 'header label', 'LIB': 'header label', 'IND': 'header label', });
lyr_1908SaskatchewanProvincialElection_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});