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
var format_ProvinceofHuron_1 = new ol.format.GeoJSON();
var features_ProvinceofHuron_1 = format_ProvinceofHuron_1.readFeatures(json_ProvinceofHuron_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceofHuron_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceofHuron_1.addFeatures(features_ProvinceofHuron_1);
var lyr_ProvinceofHuron_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinceofHuron_1, 
                style: style_ProvinceofHuron_1,
                interactive: true,
    title: 'Province of Huron<br />\
    <img src="styles/legend/ProvinceofHuron_1_0.png" /> GRN +1<br />\
    <img src="styles/legend/ProvinceofHuron_1_1.png" /> LIB +1<br />\
    <img src="styles/legend/ProvinceofHuron_1_2.png" /> LIB +5<br />\
    <img src="styles/legend/ProvinceofHuron_1_3.png" /> LIB +10<br />\
    <img src="styles/legend/ProvinceofHuron_1_4.png" /> LIB +15<br />\
    <img src="styles/legend/ProvinceofHuron_1_5.png" /> PC +1<br />\
    <img src="styles/legend/ProvinceofHuron_1_6.png" /> PC +5<br />\
    <img src="styles/legend/ProvinceofHuron_1_7.png" /> PC +10<br />\
    <img src="styles/legend/ProvinceofHuron_1_8.png" /> PC +15<br />\
    <img src="styles/legend/ProvinceofHuron_1_9.png" /> PC +20<br />\
    <img src="styles/legend/ProvinceofHuron_1_10.png" /> PC +25<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProvinceofHuron_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProvinceofHuron_1];
lyr_ProvinceofHuron_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LIB': 'LIB', 'PC': 'PC', 'NDP': 'NDP', 'GRN': 'GRN', 'Others': 'Others', 'Population': 'Population', });
lyr_ProvinceofHuron_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LIB': 'TextEdit', 'PC': 'TextEdit', 'NDP': 'TextEdit', 'GRN': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_ProvinceofHuron_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'LIB': 'header label', 'PC': 'header label', 'NDP': 'header label', 'GRN': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_ProvinceofHuron_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});