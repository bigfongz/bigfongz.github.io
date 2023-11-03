var wms_layers = [];

var format_AlbertaRidingsWith1500People_0 = new ol.format.GeoJSON();
var features_AlbertaRidingsWith1500People_0 = format_AlbertaRidingsWith1500People_0.readFeatures(json_AlbertaRidingsWith1500People_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaRidingsWith1500People_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaRidingsWith1500People_0.addFeatures(features_AlbertaRidingsWith1500People_0);
var lyr_AlbertaRidingsWith1500People_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlbertaRidingsWith1500People_0, 
                style: style_AlbertaRidingsWith1500People_0,
                interactive: true,
    title: 'Alberta Ridings With 1500 People<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_0.png" /> NDP +1<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_1.png" /> NDP +5<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_2.png" /> NDP +10<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_3.png" /> NDP +15<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_4.png" /> NDP +20<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_5.png" /> NDP +25<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_6.png" /> NDP +30<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_7.png" /> NDP +35<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_8.png" /> NDP +40<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_9.png" /> NDP +45<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_10.png" /> NDP +50<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_11.png" /> NDP +55<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_12.png" /> NDP +65<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_13.png" /> NDP +75<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_14.png" /> NDP +80<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_15.png" /> NDP +85<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_16.png" /> NDP +90<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_17.png" /> PC +1<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_18.png" /> PC +5<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_19.png" /> PC +10<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_20.png" /> PC +15<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_21.png" /> PC +20<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_22.png" /> PC +25<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_23.png" /> PC +30<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_24.png" /> PC +35<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_25.png" /> PC +40<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_26.png" /> PC +45<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_27.png" /> WP +1<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_28.png" /> WP +5<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_29.png" /> WP +10<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_30.png" /> WP +15<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_31.png" /> WP +20<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_32.png" /> WP +25<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_33.png" /> WP +30<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_34.png" /> WP +35<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_35.png" /> WP +40<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_36.png" /> WP +45<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_37.png" /> WP +50<br />\
    <img src="styles/legend/AlbertaRidingsWith1500People_0_38.png" /> WP +55<br />'
        });

lyr_AlbertaRidingsWith1500People_0.setVisible(true);
var layersList = [lyr_AlbertaRidingsWith1500People_0];
lyr_AlbertaRidingsWith1500People_0.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'PC': 'PC', 'WP': 'WP', 'LIB': 'LIB', 'AP': 'AP', 'Others': 'Others', 'Population': 'Population', });
lyr_AlbertaRidingsWith1500People_0.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'PC': 'TextEdit', 'WP': 'TextEdit', 'LIB': 'TextEdit', 'AP': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_AlbertaRidingsWith1500People_0.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'NDP': 'header label', 'PC': 'header label', 'WP': 'header label', 'LIB': 'header label', 'AP': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_AlbertaRidingsWith1500People_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});