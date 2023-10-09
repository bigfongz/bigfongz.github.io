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
var format_DistrictofAlberta_1 = new ol.format.GeoJSON();
var features_DistrictofAlberta_1 = format_DistrictofAlberta_1.readFeatures(json_DistrictofAlberta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictofAlberta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictofAlberta_1.addFeatures(features_DistrictofAlberta_1);
var lyr_DistrictofAlberta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictofAlberta_1, 
                style: style_DistrictofAlberta_1,
                interactive: true,
    title: 'District of Alberta<br />\
    <img src="styles/legend/DistrictofAlberta_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/DistrictofAlberta_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/DistrictofAlberta_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/DistrictofAlberta_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/DistrictofAlberta_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/DistrictofAlberta_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/DistrictofAlberta_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/DistrictofAlberta_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/DistrictofAlberta_1_8.png" /> NDP +40<br />\
    <img src="styles/legend/DistrictofAlberta_1_9.png" /> NDP +50<br />\
    <img src="styles/legend/DistrictofAlberta_1_10.png" /> NDP +55<br />\
    <img src="styles/legend/DistrictofAlberta_1_11.png" /> UCP +1<br />\
    <img src="styles/legend/DistrictofAlberta_1_12.png" /> UCP +5<br />\
    <img src="styles/legend/DistrictofAlberta_1_13.png" /> UCP +10<br />\
    <img src="styles/legend/DistrictofAlberta_1_14.png" /> UCP +15<br />\
    <img src="styles/legend/DistrictofAlberta_1_15.png" /> UCP +20<br />\
    <img src="styles/legend/DistrictofAlberta_1_16.png" /> UCP +25<br />\
    <img src="styles/legend/DistrictofAlberta_1_17.png" /> UCP +30<br />\
    <img src="styles/legend/DistrictofAlberta_1_18.png" /> UCP +35<br />\
    <img src="styles/legend/DistrictofAlberta_1_19.png" /> UCP +40<br />\
    <img src="styles/legend/DistrictofAlberta_1_20.png" /> UCP +45<br />\
    <img src="styles/legend/DistrictofAlberta_1_21.png" /> UCP +50<br />\
    <img src="styles/legend/DistrictofAlberta_1_22.png" /> UCP +55<br />\
    <img src="styles/legend/DistrictofAlberta_1_23.png" /> UCP +60<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DistrictofAlberta_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DistrictofAlberta_1];
lyr_DistrictofAlberta_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'UCP': 'UCP', 'NDP': 'NDP', 'Others': 'Others', 'Population': 'Population', });
lyr_DistrictofAlberta_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'UCP': 'TextEdit', 'NDP': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_DistrictofAlberta_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'UCP': 'header label', 'NDP': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_DistrictofAlberta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});