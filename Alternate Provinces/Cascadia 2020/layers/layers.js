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
var format_2020_1 = new ol.format.GeoJSON();
var features_2020_1 = format_2020_1.readFeatures(json_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_1.addFeatures(features_2020_1);
var lyr_2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_1, 
                style: style_2020_1,
                popuplayertitle: "2020",
                interactive: true,
    title: '2020<br />\
    <img src="styles/legend/2020_1_0.png" /> GRN +1<br />\
    <img src="styles/legend/2020_1_1.png" /> GRN +5<br />\
    <img src="styles/legend/2020_1_2.png" /> GRN +10<br />\
    <img src="styles/legend/2020_1_3.png" /> GRN +15<br />\
    <img src="styles/legend/2020_1_4.png" /> GRN +20<br />\
    <img src="styles/legend/2020_1_5.png" /> GRN +25<br />\
    <img src="styles/legend/2020_1_6.png" /> LIB +1<br />\
    <img src="styles/legend/2020_1_7.png" /> LIB +5<br />\
    <img src="styles/legend/2020_1_8.png" /> LIB +10<br />\
    <img src="styles/legend/2020_1_9.png" /> LIB +15<br />\
    <img src="styles/legend/2020_1_10.png" /> LIB +20<br />\
    <img src="styles/legend/2020_1_11.png" /> LIB +25<br />\
    <img src="styles/legend/2020_1_12.png" /> LIB +30<br />\
    <img src="styles/legend/2020_1_13.png" /> LIB +35<br />\
    <img src="styles/legend/2020_1_14.png" /> LIB +40<br />\
    <img src="styles/legend/2020_1_15.png" /> LIB +45<br />\
    <img src="styles/legend/2020_1_16.png" /> LIB +50<br />\
    <img src="styles/legend/2020_1_17.png" /> LIB +60<br />\
    <img src="styles/legend/2020_1_18.png" /> NDP +1<br />\
    <img src="styles/legend/2020_1_19.png" /> NDP +5<br />\
    <img src="styles/legend/2020_1_20.png" /> NDP +10<br />\
    <img src="styles/legend/2020_1_21.png" /> NDP +15<br />\
    <img src="styles/legend/2020_1_22.png" /> NDP +20<br />\
    <img src="styles/legend/2020_1_23.png" /> NDP +25<br />\
    <img src="styles/legend/2020_1_24.png" /> NDP +30<br />\
    <img src="styles/legend/2020_1_25.png" /> NDP +35<br />\
    <img src="styles/legend/2020_1_26.png" /> NDP +40<br />\
    <img src="styles/legend/2020_1_27.png" /> NDP +45<br />\
    <img src="styles/legend/2020_1_28.png" /> NDP +50<br />\
    <img src="styles/legend/2020_1_29.png" /> NDP +55<br />\
    <img src="styles/legend/2020_1_30.png" /> NDP +60<br />\
    <img src="styles/legend/2020_1_31.png" /> OTH +1<br />\
    <img src="styles/legend/2020_1_32.png" /> OTH +5<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2020_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2020_1];
lyr_2020_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'LIB': 'LIB', 'GRN': 'GRN', 'CON': 'CON', 'OTH': 'OTH', });
lyr_2020_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'LIB': 'TextEdit', 'GRN': 'TextEdit', 'CON': 'TextEdit', 'OTH': 'TextEdit', });
lyr_2020_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'NDP': 'inline label - always visible', 'LIB': 'inline label - always visible', 'GRN': 'inline label - always visible', 'CON': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_2020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});