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
var format_DistrictofAlberta2015_1 = new ol.format.GeoJSON();
var features_DistrictofAlberta2015_1 = format_DistrictofAlberta2015_1.readFeatures(json_DistrictofAlberta2015_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictofAlberta2015_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictofAlberta2015_1.addFeatures(features_DistrictofAlberta2015_1);
var lyr_DistrictofAlberta2015_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictofAlberta2015_1, 
                style: style_DistrictofAlberta2015_1,
                interactive: true,
    title: 'District of Alberta 2015<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_0.png" /> AP +1<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_1.png" /> NDP +1<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_2.png" /> NDP +5<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_3.png" /> NDP +10<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_4.png" /> NDP +15<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_5.png" /> NDP +20<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_6.png" /> NDP +25<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_7.png" /> NDP +30<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_8.png" /> NDP +35<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_9.png" /> NDP +40<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_10.png" /> NDP +45<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_11.png" /> NDP +50<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_12.png" /> NDP +55<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_13.png" /> NDP +60<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_14.png" /> PC +1<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_15.png" /> PC +5<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_16.png" /> PC +10<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_17.png" /> PC +15<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_18.png" /> WP +1<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_19.png" /> WP +5<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_20.png" /> WP +10<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_21.png" /> WP +15<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_22.png" /> WP +20<br />\
    <img src="styles/legend/DistrictofAlberta2015_1_23.png" /> WP +25<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DistrictofAlberta2015_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DistrictofAlberta2015_1];
lyr_DistrictofAlberta2015_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'PC': 'PC', 'WP': 'WP', 'LIB': 'LIB', 'AP': 'AP', 'Others': 'Others', });
lyr_DistrictofAlberta2015_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'PC': 'TextEdit', 'WP': 'TextEdit', 'LIB': 'TextEdit', 'AP': 'TextEdit', 'Others': 'TextEdit', });
lyr_DistrictofAlberta2015_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'NDP': 'header label', 'PC': 'header label', 'WP': 'header label', 'LIB': 'header label', 'AP': 'header label', 'Others': 'header label', });
lyr_DistrictofAlberta2015_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});