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
    <img src="styles/legend/2021_1_5.png" /> CPC +25<br />\
    <img src="styles/legend/2021_1_6.png" /> CPC +35<br />\
    <img src="styles/legend/2021_1_7.png" /> LPC +1<br />\
    <img src="styles/legend/2021_1_8.png" /> LPC +5<br />\
    <img src="styles/legend/2021_1_9.png" /> LPC +10<br />\
    <img src="styles/legend/2021_1_10.png" /> LPC +15<br />\
    <img src="styles/legend/2021_1_11.png" /> LPC +20<br />\
    <img src="styles/legend/2021_1_12.png" /> LPC +25<br />\
    <img src="styles/legend/2021_1_13.png" /> LPC +30<br />\
    <img src="styles/legend/2021_1_14.png" /> LPC +35<br />\
    <img src="styles/legend/2021_1_15.png" /> LPC +40<br />\
    <img src="styles/legend/2021_1_16.png" /> NDP +1<br />\
    <img src="styles/legend/2021_1_17.png" /> NDP +5<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2021_1];
lyr_2021_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LPC': 'LPC', 'CPC': 'CPC', 'NDP': 'NDP', 'BQ': 'BQ', 'PPC': 'PPC', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_2021_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LPC': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'BQ': 'TextEdit', 'PPC': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_2021_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'BQ': 'inline label - always visible', 'PPC': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});