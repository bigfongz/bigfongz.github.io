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
var format_ProvinceofLanark_1 = new ol.format.GeoJSON();
var features_ProvinceofLanark_1 = format_ProvinceofLanark_1.readFeatures(json_ProvinceofLanark_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceofLanark_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceofLanark_1.addFeatures(features_ProvinceofLanark_1);
var lyr_ProvinceofLanark_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinceofLanark_1, 
                style: style_ProvinceofLanark_1,
                interactive: true,
    title: 'Province of Lanark<br />\
    <img src="styles/legend/ProvinceofLanark_1_0.png" /> LIB +1<br />\
    <img src="styles/legend/ProvinceofLanark_1_1.png" /> LIB +5<br />\
    <img src="styles/legend/ProvinceofLanark_1_2.png" /> LIB +10<br />\
    <img src="styles/legend/ProvinceofLanark_1_3.png" /> LIB +15<br />\
    <img src="styles/legend/ProvinceofLanark_1_4.png" /> LIB +20<br />\
    <img src="styles/legend/ProvinceofLanark_1_5.png" /> LIB +25<br />\
    <img src="styles/legend/ProvinceofLanark_1_6.png" /> LIB +30<br />\
    <img src="styles/legend/ProvinceofLanark_1_7.png" /> LIB +35<br />\
    <img src="styles/legend/ProvinceofLanark_1_8.png" /> LIB +40<br />\
    <img src="styles/legend/ProvinceofLanark_1_9.png" /> PC +1<br />\
    <img src="styles/legend/ProvinceofLanark_1_10.png" /> PC +5<br />\
    <img src="styles/legend/ProvinceofLanark_1_11.png" /> PC +10<br />\
    <img src="styles/legend/ProvinceofLanark_1_12.png" /> PC +15<br />\
    <img src="styles/legend/ProvinceofLanark_1_13.png" /> PC +20<br />\
    <img src="styles/legend/ProvinceofLanark_1_14.png" /> PC +25<br />\
    <img src="styles/legend/ProvinceofLanark_1_15.png" /> PC +30<br />\
    <img src="styles/legend/ProvinceofLanark_1_16.png" /> PC +35<br />\
    <img src="styles/legend/ProvinceofLanark_1_17.png" /> PC +40<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProvinceofLanark_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProvinceofLanark_1];
lyr_ProvinceofLanark_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LIB': 'LIB', 'PC': 'PC', 'NDP': 'NDP', 'GRN': 'GRN', 'Others': 'Others', 'Population': 'Population', });
lyr_ProvinceofLanark_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LIB': 'TextEdit', 'PC': 'TextEdit', 'NDP': 'TextEdit', 'GRN': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_ProvinceofLanark_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'LIB': 'header label', 'PC': 'header label', 'NDP': 'header label', 'GRN': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_ProvinceofLanark_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});