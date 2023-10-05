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
var format_Refactored_1 = new ol.format.GeoJSON();
var features_Refactored_1 = format_Refactored_1.readFeatures(json_Refactored_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_1.addFeatures(features_Refactored_1);
var lyr_Refactored_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refactored_1, 
                style: style_Refactored_1,
                interactive: true,
    title: 'Refactored<br />\
    <img src="styles/legend/Refactored_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/Refactored_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/Refactored_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/Refactored_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/Refactored_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/Refactored_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/Refactored_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/Refactored_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/Refactored_1_8.png" /> NDP +40<br />\
    <img src="styles/legend/Refactored_1_9.png" /> NDP +45<br />\
    <img src="styles/legend/Refactored_1_10.png" /> NDP +50<br />\
    <img src="styles/legend/Refactored_1_11.png" /> PC +1<br />\
    <img src="styles/legend/Refactored_1_12.png" /> PC +5<br />\
    <img src="styles/legend/Refactored_1_13.png" /> PC +10<br />\
    <img src="styles/legend/Refactored_1_14.png" /> PC +15<br />\
    <img src="styles/legend/Refactored_1_15.png" /> PC +20<br />\
    <img src="styles/legend/Refactored_1_16.png" /> PC +25<br />\
    <img src="styles/legend/Refactored_1_17.png" /> PC +30<br />\
    <img src="styles/legend/Refactored_1_18.png" /> PC +35<br />\
    <img src="styles/legend/Refactored_1_19.png" /> PC +40<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Refactored_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Refactored_1];
lyr_Refactored_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'PC': 'PC', 'LIB': 'LIB', 'GRN': 'GRN', 'Others': 'Others', 'Population': 'Population', });
lyr_Refactored_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'PC': 'TextEdit', 'LIB': 'TextEdit', 'GRN': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_Refactored_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'NDP': 'header label', 'PC': 'header label', 'LIB': 'header label', 'GRN': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_Refactored_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});