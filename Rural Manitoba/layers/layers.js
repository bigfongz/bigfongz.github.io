var wms_layers = [];

var format_2011Results_0 = new ol.format.GeoJSON();
var features_2011Results_0 = format_2011Results_0.readFeatures(json_2011Results_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2011Results_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011Results_0.addFeatures(features_2011Results_0);
var lyr_2011Results_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2011Results_0, 
                style: style_2011Results_0,
                interactive: true,
    title: '2011 Results<br />\
    <img src="styles/legend/2011Results_0_0.png" /> NDP +1<br />\
    <img src="styles/legend/2011Results_0_1.png" /> NDP +5<br />\
    <img src="styles/legend/2011Results_0_2.png" /> NDP +10<br />\
    <img src="styles/legend/2011Results_0_3.png" /> NDP +15<br />\
    <img src="styles/legend/2011Results_0_4.png" /> NDP +20<br />\
    <img src="styles/legend/2011Results_0_5.png" /> NDP +25<br />\
    <img src="styles/legend/2011Results_0_6.png" /> NDP +30<br />\
    <img src="styles/legend/2011Results_0_7.png" /> NDP +35<br />\
    <img src="styles/legend/2011Results_0_8.png" /> NDP +40<br />\
    <img src="styles/legend/2011Results_0_9.png" /> NDP +45<br />\
    <img src="styles/legend/2011Results_0_10.png" /> NDP +50<br />\
    <img src="styles/legend/2011Results_0_11.png" /> NDP +55<br />\
    <img src="styles/legend/2011Results_0_12.png" /> NDP +60<br />\
    <img src="styles/legend/2011Results_0_13.png" /> NDP +65<br />\
    <img src="styles/legend/2011Results_0_14.png" /> NDP +70<br />\
    <img src="styles/legend/2011Results_0_15.png" /> NDP +75<br />\
    <img src="styles/legend/2011Results_0_16.png" /> NDP +80<br />\
    <img src="styles/legend/2011Results_0_17.png" /> NDP +85<br />\
    <img src="styles/legend/2011Results_0_18.png" /> NDP +90<br />\
    <img src="styles/legend/2011Results_0_19.png" /> NDP +95<br />\
    <img src="styles/legend/2011Results_0_20.png" /> NDP +100<br />\
    <img src="styles/legend/2011Results_0_21.png" /> PC +1<br />\
    <img src="styles/legend/2011Results_0_22.png" /> PC +5<br />\
    <img src="styles/legend/2011Results_0_23.png" /> PC +10<br />\
    <img src="styles/legend/2011Results_0_24.png" /> PC +15<br />\
    <img src="styles/legend/2011Results_0_25.png" /> PC +20<br />\
    <img src="styles/legend/2011Results_0_26.png" /> PC +25<br />\
    <img src="styles/legend/2011Results_0_27.png" /> PC +30<br />\
    <img src="styles/legend/2011Results_0_28.png" /> PC +35<br />\
    <img src="styles/legend/2011Results_0_29.png" /> PC +40<br />\
    <img src="styles/legend/2011Results_0_30.png" /> PC +45<br />\
    <img src="styles/legend/2011Results_0_31.png" /> PC +50<br />\
    <img src="styles/legend/2011Results_0_32.png" /> PC +55<br />\
    <img src="styles/legend/2011Results_0_33.png" /> PC +60<br />\
    <img src="styles/legend/2011Results_0_34.png" /> PC +65<br />\
    <img src="styles/legend/2011Results_0_35.png" /> PC +70<br />\
    <img src="styles/legend/2011Results_0_36.png" /> PC +75<br />\
    <img src="styles/legend/2011Results_0_37.png" /> PC +80<br />\
    <img src="styles/legend/2011Results_0_38.png" /> PC +85<br />\
    <img src="styles/legend/2011Results_0_39.png" /> LIB +1<br />'
        });

lyr_2011Results_0.setVisible(true);
var layersList = [lyr_2011Results_0];
lyr_2011Results_0.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'Population': 'Population', });
lyr_2011Results_0.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'Population': 'TextEdit', });
lyr_2011Results_0.set('fieldLabels', {'Name': 'no label', 'Difference': 'no label', 'Population': 'no label', });
lyr_2011Results_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});