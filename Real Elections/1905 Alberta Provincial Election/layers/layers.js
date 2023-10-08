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
var format_1905AlbertaProvincialElection_1 = new ol.format.GeoJSON();
var features_1905AlbertaProvincialElection_1 = format_1905AlbertaProvincialElection_1.readFeatures(json_1905AlbertaProvincialElection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1905AlbertaProvincialElection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1905AlbertaProvincialElection_1.addFeatures(features_1905AlbertaProvincialElection_1);
var lyr_1905AlbertaProvincialElection_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1905AlbertaProvincialElection_1, 
                style: style_1905AlbertaProvincialElection_1,
                interactive: true,
    title: '1905 Alberta Provincial Election<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_0.png" /> CON +1<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_1.png" /> LIB +1<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_2.png" /> LIB +5<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_3.png" /> LIB +10<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_4.png" /> LIB +15<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_5.png" /> LIB +20<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_6.png" /> LIB +25<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_7.png" /> LIB +30<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_8.png" /> LIB +35<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_9.png" /> LIB +40<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_10.png" /> LIB +45<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_11.png" /> LIB +50<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_12.png" /> LIB +55<br />\
    <img src="styles/legend/1905AlbertaProvincialElection_1_13.png" /> LIB +100<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_1905AlbertaProvincialElection_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1905AlbertaProvincialElection_1];
lyr_1905AlbertaProvincialElection_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'MLA': 'MLA', 'LIB': 'LIB', 'CON': 'CON', 'IND': 'IND', });
lyr_1905AlbertaProvincialElection_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'MLA': 'TextEdit', 'LIB': 'TextEdit', 'CON': 'TextEdit', 'IND': 'TextEdit', });
lyr_1905AlbertaProvincialElection_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'MLA': 'header label', 'LIB': 'header label', 'CON': 'header label', 'IND': 'header label', });
lyr_1905AlbertaProvincialElection_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});