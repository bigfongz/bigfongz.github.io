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
var format_ProvinceofDurham_1 = new ol.format.GeoJSON();
var features_ProvinceofDurham_1 = format_ProvinceofDurham_1.readFeatures(json_ProvinceofDurham_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceofDurham_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceofDurham_1.addFeatures(features_ProvinceofDurham_1);
var lyr_ProvinceofDurham_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinceofDurham_1, 
                style: style_ProvinceofDurham_1,
                interactive: true,
    title: 'Province of Durham<br />\
    <img src="styles/legend/ProvinceofDurham_1_0.png" /> LIB +1<br />\
    <img src="styles/legend/ProvinceofDurham_1_1.png" /> LIB +5<br />\
    <img src="styles/legend/ProvinceofDurham_1_2.png" /> LIB +10<br />\
    <img src="styles/legend/ProvinceofDurham_1_3.png" /> LIB +15<br />\
    <img src="styles/legend/ProvinceofDurham_1_4.png" /> LIB +20<br />\
    <img src="styles/legend/ProvinceofDurham_1_5.png" /> LIB +25<br />\
    <img src="styles/legend/ProvinceofDurham_1_6.png" /> LIB +30<br />\
    <img src="styles/legend/ProvinceofDurham_1_7.png" /> LIB +35<br />\
    <img src="styles/legend/ProvinceofDurham_1_8.png" /> NDP +1<br />\
    <img src="styles/legend/ProvinceofDurham_1_9.png" /> NDP +10<br />\
    <img src="styles/legend/ProvinceofDurham_1_10.png" /> NDP +15<br />\
    <img src="styles/legend/ProvinceofDurham_1_11.png" /> NDP +25<br />\
    <img src="styles/legend/ProvinceofDurham_1_12.png" /> NDP +30<br />\
    <img src="styles/legend/ProvinceofDurham_1_13.png" /> PC +1<br />\
    <img src="styles/legend/ProvinceofDurham_1_14.png" /> PC +5<br />\
    <img src="styles/legend/ProvinceofDurham_1_15.png" /> PC +10<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProvinceofDurham_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProvinceofDurham_1];
lyr_ProvinceofDurham_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LIB': 'LIB', 'PC': 'PC', 'NDP': 'NDP', 'GRN': 'GRN', 'Others': 'Others', 'Population': 'Population', });
lyr_ProvinceofDurham_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LIB': 'TextEdit', 'PC': 'TextEdit', 'NDP': 'TextEdit', 'GRN': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_ProvinceofDurham_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'LIB': 'header label', 'PC': 'header label', 'NDP': 'header label', 'GRN': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_ProvinceofDurham_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});