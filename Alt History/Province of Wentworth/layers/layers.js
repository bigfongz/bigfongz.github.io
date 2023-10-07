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
var format_ProvinceofWentworth_1 = new ol.format.GeoJSON();
var features_ProvinceofWentworth_1 = format_ProvinceofWentworth_1.readFeatures(json_ProvinceofWentworth_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceofWentworth_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceofWentworth_1.addFeatures(features_ProvinceofWentworth_1);
var lyr_ProvinceofWentworth_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinceofWentworth_1, 
                style: style_ProvinceofWentworth_1,
                interactive: true,
    title: 'Province of Wentworth<br />\
    <img src="styles/legend/ProvinceofWentworth_1_0.png" /> LIB +1<br />\
    <img src="styles/legend/ProvinceofWentworth_1_1.png" /> LIB +5<br />\
    <img src="styles/legend/ProvinceofWentworth_1_2.png" /> LIB +10<br />\
    <img src="styles/legend/ProvinceofWentworth_1_3.png" /> LIB +15<br />\
    <img src="styles/legend/ProvinceofWentworth_1_4.png" /> LIB +20<br />\
    <img src="styles/legend/ProvinceofWentworth_1_5.png" /> NDP +1<br />\
    <img src="styles/legend/ProvinceofWentworth_1_6.png" /> NDP +5<br />\
    <img src="styles/legend/ProvinceofWentworth_1_7.png" /> NDP +10<br />\
    <img src="styles/legend/ProvinceofWentworth_1_8.png" /> NDP +15<br />\
    <img src="styles/legend/ProvinceofWentworth_1_9.png" /> NDP +20<br />\
    <img src="styles/legend/ProvinceofWentworth_1_10.png" /> NDP +25<br />\
    <img src="styles/legend/ProvinceofWentworth_1_11.png" /> NDP +30<br />\
    <img src="styles/legend/ProvinceofWentworth_1_12.png" /> NDP +35<br />\
    <img src="styles/legend/ProvinceofWentworth_1_13.png" /> NDP +40<br />\
    <img src="styles/legend/ProvinceofWentworth_1_14.png" /> NDP +45<br />\
    <img src="styles/legend/ProvinceofWentworth_1_15.png" /> PC +1<br />\
    <img src="styles/legend/ProvinceofWentworth_1_16.png" /> PC +5<br />\
    <img src="styles/legend/ProvinceofWentworth_1_17.png" /> PC +10<br />\
    <img src="styles/legend/ProvinceofWentworth_1_18.png" /> PC +15<br />\
    <img src="styles/legend/ProvinceofWentworth_1_19.png" /> PC +25<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProvinceofWentworth_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProvinceofWentworth_1];
lyr_ProvinceofWentworth_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LIB': 'LIB', 'PC': 'PC', 'NDP': 'NDP', 'GRN': 'GRN', 'Others': 'Others', 'Population': 'Population', });
lyr_ProvinceofWentworth_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LIB': 'TextEdit', 'PC': 'TextEdit', 'NDP': 'TextEdit', 'GRN': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_ProvinceofWentworth_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'LIB': 'header label', 'PC': 'header label', 'NDP': 'header label', 'GRN': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_ProvinceofWentworth_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});