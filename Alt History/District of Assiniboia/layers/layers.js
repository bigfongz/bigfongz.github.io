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
var format_DistrictofAssiniboia_1 = new ol.format.GeoJSON();
var features_DistrictofAssiniboia_1 = format_DistrictofAssiniboia_1.readFeatures(json_DistrictofAssiniboia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictofAssiniboia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictofAssiniboia_1.addFeatures(features_DistrictofAssiniboia_1);
var lyr_DistrictofAssiniboia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictofAssiniboia_1, 
                style: style_DistrictofAssiniboia_1,
                interactive: true,
    title: 'District of Assiniboia<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_0.png" /> CPC +1<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_1.png" /> CPC +5<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_2.png" /> CPC +10<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_3.png" /> CPC +15<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_4.png" /> CPC +20<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_5.png" /> CPC +25<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_6.png" /> CPC +30<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_7.png" /> CPC +35<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_8.png" /> CPC +45<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_9.png" /> NDP +1<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_10.png" /> NDP +5<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_11.png" /> NDP +10<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_12.png" /> NDP +15<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_13.png" /> NDP +20<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_14.png" /> NDP +25<br />\
    <img src="styles/legend/DistrictofAssiniboia_1_15.png" /> NDP +40<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DistrictofAssiniboia_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DistrictofAssiniboia_1];
lyr_DistrictofAssiniboia_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CPC': 'CPC', 'NDP': 'NDP', 'LIB': 'LIB', 'PPC': 'PPC', 'Others': 'Others', 'Population': 'Population', });
lyr_DistrictofAssiniboia_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'LIB': 'TextEdit', 'PPC': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_DistrictofAssiniboia_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'CPC': 'header label', 'NDP': 'header label', 'LIB': 'header label', 'PPC': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_DistrictofAssiniboia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});