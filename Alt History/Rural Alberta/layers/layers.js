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
var format_2015Results_1 = new ol.format.GeoJSON();
var features_2015Results_1 = format_2015Results_1.readFeatures(json_2015Results_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015Results_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015Results_1.addFeatures(features_2015Results_1);
var lyr_2015Results_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2015Results_1, 
                style: style_2015Results_1,
                interactive: true,
    title: '2015 Results<br />\
    <img src="styles/legend/2015Results_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/2015Results_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/2015Results_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/2015Results_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/2015Results_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/2015Results_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/2015Results_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/2015Results_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/2015Results_1_8.png" /> NDP +40<br />\
    <img src="styles/legend/2015Results_1_9.png" /> NDP +50<br />\
    <img src="styles/legend/2015Results_1_10.png" /> NDP +75<br />\
    <img src="styles/legend/2015Results_1_11.png" /> NDP +80<br />\
    <img src="styles/legend/2015Results_1_12.png" /> NDP +90<br />\
    <img src="styles/legend/2015Results_1_13.png" /> PC +1<br />\
    <img src="styles/legend/2015Results_1_14.png" /> PC +5<br />\
    <img src="styles/legend/2015Results_1_15.png" /> PC +10<br />\
    <img src="styles/legend/2015Results_1_16.png" /> PC +15<br />\
    <img src="styles/legend/2015Results_1_17.png" /> PC +20<br />\
    <img src="styles/legend/2015Results_1_18.png" /> PC +40<br />\
    <img src="styles/legend/2015Results_1_19.png" /> WP +1<br />\
    <img src="styles/legend/2015Results_1_20.png" /> WP +5<br />\
    <img src="styles/legend/2015Results_1_21.png" /> WP +10<br />\
    <img src="styles/legend/2015Results_1_22.png" /> WP +15<br />\
    <img src="styles/legend/2015Results_1_23.png" /> WP +20<br />\
    <img src="styles/legend/2015Results_1_24.png" /> WP +25<br />\
    <img src="styles/legend/2015Results_1_25.png" /> WP +30<br />\
    <img src="styles/legend/2015Results_1_26.png" /> WP +35<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2015Results_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2015Results_1];
lyr_2015Results_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'Population': 'Population', });
lyr_2015Results_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'Population': 'TextEdit', });
lyr_2015Results_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'Population': 'header label', });
lyr_2015Results_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});