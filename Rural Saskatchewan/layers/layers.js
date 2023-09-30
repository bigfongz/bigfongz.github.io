var wms_layers = [];

var format_2020Results_0 = new ol.format.GeoJSON();
var features_2020Results_0 = format_2020Results_0.readFeatures(json_2020Results_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020Results_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020Results_0.addFeatures(features_2020Results_0);
var lyr_2020Results_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020Results_0, 
                style: style_2020Results_0,
                interactive: true,
    title: '2020 Results<br />\
    <img src="styles/legend/2020Results_0_0.png" /> NDP +1<br />\
    <img src="styles/legend/2020Results_0_1.png" /> NDP +5<br />\
    <img src="styles/legend/2020Results_0_2.png" /> NDP +10<br />\
    <img src="styles/legend/2020Results_0_3.png" /> NDP +20<br />\
    <img src="styles/legend/2020Results_0_4.png" /> NDP +35<br />\
    <img src="styles/legend/2020Results_0_5.png" /> NDP +40<br />\
    <img src="styles/legend/2020Results_0_6.png" /> NDP +50<br />\
    <img src="styles/legend/2020Results_0_7.png" /> NDP +55<br />\
    <img src="styles/legend/2020Results_0_8.png" /> NDP +65<br />\
    <img src="styles/legend/2020Results_0_9.png" /> NDP +80<br />\
    <img src="styles/legend/2020Results_0_10.png" /> SP +1<br />\
    <img src="styles/legend/2020Results_0_11.png" /> SP +5<br />\
    <img src="styles/legend/2020Results_0_12.png" /> SP +10<br />\
    <img src="styles/legend/2020Results_0_13.png" /> SP +15<br />\
    <img src="styles/legend/2020Results_0_14.png" /> SP +20<br />\
    <img src="styles/legend/2020Results_0_15.png" /> SP +25<br />\
    <img src="styles/legend/2020Results_0_16.png" /> SP +30<br />\
    <img src="styles/legend/2020Results_0_17.png" /> SP +35<br />\
    <img src="styles/legend/2020Results_0_18.png" /> SP +40<br />\
    <img src="styles/legend/2020Results_0_19.png" /> SP +45<br />\
    <img src="styles/legend/2020Results_0_20.png" /> SP +50<br />\
    <img src="styles/legend/2020Results_0_21.png" /> SP +55<br />\
    <img src="styles/legend/2020Results_0_22.png" /> SP +60<br />\
    <img src="styles/legend/2020Results_0_23.png" /> SP +65<br />\
    <img src="styles/legend/2020Results_0_24.png" /> SP +70<br />\
    <img src="styles/legend/2020Results_0_25.png" /> SP +75<br />'
        });

lyr_2020Results_0.setVisible(true);
var layersList = [lyr_2020Results_0];
lyr_2020Results_0.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'SP': 'SP', 'NDP': 'NDP', 'BUF': 'BUF', 'GRN': 'GRN', 'Others': 'Others', 'Votes': 'Votes', 'Population': 'Population', });
lyr_2020Results_0.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'SP': 'TextEdit', 'NDP': 'TextEdit', 'BUF': 'TextEdit', 'GRN': 'TextEdit', 'Others': 'TextEdit', 'Votes': 'TextEdit', 'Population': 'TextEdit', });
lyr_2020Results_0.set('fieldLabels', {'Name': 'no label', 'Difference': 'no label', 'SP': 'no label', 'NDP': 'no label', 'BUF': 'no label', 'GRN': 'no label', 'Others': 'no label', 'Votes': 'no label', 'Population': 'no label', });
lyr_2020Results_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});