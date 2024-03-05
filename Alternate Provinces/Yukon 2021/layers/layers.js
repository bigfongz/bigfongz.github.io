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
var format_2021_1 = new ol.format.GeoJSON();
var features_2021_1 = format_2021_1.readFeatures(json_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_1.addFeatures(features_2021_1);
var lyr_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_1, 
                style: style_2021_1,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/2021_1_1.png" /> NDP +10<br />\
    <img src="styles/legend/2021_1_2.png" /> NDP +25<br />\
    <img src="styles/legend/2021_1_3.png" /> NDP +35<br />\
    <img src="styles/legend/2021_1_4.png" /> YLP +1<br />\
    <img src="styles/legend/2021_1_5.png" /> YLP +5<br />\
    <img src="styles/legend/2021_1_6.png" /> YLP +10<br />\
    <img src="styles/legend/2021_1_7.png" /> YLP +15<br />\
    <img src="styles/legend/2021_1_8.png" /> YLP +20<br />\
    <img src="styles/legend/2021_1_9.png" /> YP +1<br />\
    <img src="styles/legend/2021_1_10.png" /> YP +5<br />\
    <img src="styles/legend/2021_1_11.png" /> YP +10<br />\
    <img src="styles/legend/2021_1_12.png" /> YP +15<br />\
    <img src="styles/legend/2021_1_13.png" /> YP +20<br />\
    <img src="styles/legend/2021_1_14.png" /> YP +25<br />\
    <img src="styles/legend/2021_1_15.png" /> YP +30<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2021_1];
lyr_2021_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'YP': 'YP', 'YLP': 'YLP', 'NDP': 'NDP', 'IND': 'IND', });
lyr_2021_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'YP': 'TextEdit', 'YLP': 'TextEdit', 'NDP': 'TextEdit', 'IND': 'TextEdit', });
lyr_2021_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'YP': 'inline label - always visible', 'YLP': 'inline label - always visible', 'NDP': 'inline label - always visible', 'IND': 'inline label - always visible', });
lyr_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});