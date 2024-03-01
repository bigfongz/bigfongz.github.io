var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2021_1 = new ol.format.GeoJSON();
var features_2021_1 = format_2021_1.readFeatures(json_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_1.addFeatures(features_2021_1);
var lyr_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_1, 
                style: style_2021_1,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_1_0.png" /> CPC +1<br />\
    <img src="styles/legend/2021_1_1.png" /> CPC +5<br />\
    <img src="styles/legend/2021_1_2.png" /> CPC +10<br />\
    <img src="styles/legend/2021_1_3.png" /> CPC +15<br />\
    <img src="styles/legend/2021_1_4.png" /> CPC +20<br />\
    <img src="styles/legend/2021_1_5.png" /> GPC +1<br />\
    <img src="styles/legend/2021_1_6.png" /> GPC +5<br />\
    <img src="styles/legend/2021_1_7.png" /> GPC +10<br />\
    <img src="styles/legend/2021_1_8.png" /> GPC +15<br />\
    <img src="styles/legend/2021_1_9.png" /> GPC +20<br />\
    <img src="styles/legend/2021_1_10.png" /> GPC +25<br />\
    <img src="styles/legend/2021_1_11.png" /> GPC +30<br />\
    <img src="styles/legend/2021_1_12.png" /> GPC +35<br />\
    <img src="styles/legend/2021_1_13.png" /> GPC +40<br />\
    <img src="styles/legend/2021_1_14.png" /> GPC +45<br />\
    <img src="styles/legend/2021_1_15.png" /> LPC +1<br />\
    <img src="styles/legend/2021_1_16.png" /> LPC +5<br />\
    <img src="styles/legend/2021_1_17.png" /> NDP +1<br />\
    <img src="styles/legend/2021_1_18.png" /> NDP +5<br />\
    <img src="styles/legend/2021_1_19.png" /> NDP +10<br />\
    <img src="styles/legend/2021_1_20.png" /> NDP +15<br />\
    <img src="styles/legend/2021_1_21.png" /> NDP +20<br />\
    <img src="styles/legend/2021_1_22.png" /> NDP +25<br />\
    <img src="styles/legend/2021_1_23.png" /> NDP +30<br />\
    <img src="styles/legend/2021_1_24.png" /> NDP +35<br />\
    <img src="styles/legend/2021_1_25.png" /> NDP +40<br />\
    <img src="styles/legend/2021_1_26.png" /> NDP +45<br />\
    <img src="styles/legend/2021_1_27.png" /> NDP +50<br />\
    <img src="styles/legend/2021_1_28.png" /> NDP +60<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2021_1];
lyr_2021_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'CPC': 'CPC', 'LPC': 'LPC', 'GPC': 'GPC', 'PPC': 'PPC', 'OTH': 'OTH', });
lyr_2021_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'CPC': 'TextEdit', 'LPC': 'TextEdit', 'GPC': 'TextEdit', 'PPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_2021_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'NDP': 'inline label - always visible', 'CPC': 'inline label - always visible', 'LPC': 'inline label - always visible', 'GPC': 'inline label - always visible', 'PPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});