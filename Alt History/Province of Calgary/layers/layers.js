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
var format_ProvinceofCalgary_1 = new ol.format.GeoJSON();
var features_ProvinceofCalgary_1 = format_ProvinceofCalgary_1.readFeatures(json_ProvinceofCalgary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceofCalgary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceofCalgary_1.addFeatures(features_ProvinceofCalgary_1);
var lyr_ProvinceofCalgary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinceofCalgary_1, 
                style: style_ProvinceofCalgary_1,
                interactive: true,
    title: 'Province of Calgary<br />\
    <img src="styles/legend/ProvinceofCalgary_1_0.png" /> LIB +1<br />\
    <img src="styles/legend/ProvinceofCalgary_1_1.png" /> LIB +5<br />\
    <img src="styles/legend/ProvinceofCalgary_1_2.png" /> LIB +10<br />\
    <img src="styles/legend/ProvinceofCalgary_1_3.png" /> LIB +15<br />\
    <img src="styles/legend/ProvinceofCalgary_1_4.png" /> NDP +1<br />\
    <img src="styles/legend/ProvinceofCalgary_1_5.png" /> NDP +5<br />\
    <img src="styles/legend/ProvinceofCalgary_1_6.png" /> NDP +10<br />\
    <img src="styles/legend/ProvinceofCalgary_1_7.png" /> NDP +15<br />\
    <img src="styles/legend/ProvinceofCalgary_1_8.png" /> NDP +20<br />\
    <img src="styles/legend/ProvinceofCalgary_1_9.png" /> NDP +25<br />\
    <img src="styles/legend/ProvinceofCalgary_1_10.png" /> NDP +35<br />\
    <img src="styles/legend/ProvinceofCalgary_1_11.png" /> PC +1<br />\
    <img src="styles/legend/ProvinceofCalgary_1_12.png" /> PC +5<br />\
    <img src="styles/legend/ProvinceofCalgary_1_13.png" /> PC +10<br />\
    <img src="styles/legend/ProvinceofCalgary_1_14.png" /> PC +15<br />\
    <img src="styles/legend/ProvinceofCalgary_1_15.png" /> PC +20<br />\
    <img src="styles/legend/ProvinceofCalgary_1_16.png" /> WP +1<br />\
    <img src="styles/legend/ProvinceofCalgary_1_17.png" /> WP +5<br />\
    <img src="styles/legend/ProvinceofCalgary_1_18.png" /> WP +10<br />\
    <img src="styles/legend/ProvinceofCalgary_1_19.png" /> WP +15<br />\
    <img src="styles/legend/ProvinceofCalgary_1_20.png" /> WP +25<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProvinceofCalgary_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProvinceofCalgary_1];
lyr_ProvinceofCalgary_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'PC': 'PC', 'WP': 'WP', 'LIB': 'LIB', 'Others': 'Others', 'Population': 'Population', });
lyr_ProvinceofCalgary_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'PC': 'TextEdit', 'WP': 'TextEdit', 'LIB': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_ProvinceofCalgary_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'NDP': 'header label', 'PC': 'header label', 'WP': 'header label', 'LIB': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_ProvinceofCalgary_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});