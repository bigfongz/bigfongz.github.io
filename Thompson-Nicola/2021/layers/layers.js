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
    <img src="styles/legend/2021_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/2021_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/2021_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/2021_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/2021_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/2021_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/2021_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/2021_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/2021_1_8.png" /> NDP +40<br />\
    <img src="styles/legend/2021_1_9.png" /> NDP +45<br />\
    <img src="styles/legend/2021_1_10.png" /> NDP +50<br />\
    <img src="styles/legend/2021_1_11.png" /> NDP +55<br />\
    <img src="styles/legend/2021_1_12.png" /> NDP +60<br />\
    <img src="styles/legend/2021_1_13.png" /> NDP +65<br />\
    <img src="styles/legend/2021_1_14.png" /> NDP +70<br />\
    <img src="styles/legend/2021_1_15.png" /> NDP +75<br />\
    <img src="styles/legend/2021_1_16.png" /> NDP +80<br />\
    <img src="styles/legend/2021_1_17.png" /> NDP +85<br />\
    <img src="styles/legend/2021_1_18.png" /> NDP +90<br />\
    <img src="styles/legend/2021_1_19.png" /> NDP +95<br />\
    <img src="styles/legend/2021_1_20.png" /> NDP +100<br />\
    <img src="styles/legend/2021_1_21.png" /> CPC +1<br />\
    <img src="styles/legend/2021_1_22.png" /> CPC +5<br />\
    <img src="styles/legend/2021_1_23.png" /> CPC +10<br />\
    <img src="styles/legend/2021_1_24.png" /> CPC +15<br />\
    <img src="styles/legend/2021_1_25.png" /> CPC +20<br />\
    <img src="styles/legend/2021_1_26.png" /> CPC +25<br />\
    <img src="styles/legend/2021_1_27.png" /> CPC +30<br />\
    <img src="styles/legend/2021_1_28.png" /> CPC +35<br />\
    <img src="styles/legend/2021_1_29.png" /> CPC +40<br />\
    <img src="styles/legend/2021_1_30.png" /> CPC +45<br />\
    <img src="styles/legend/2021_1_31.png" /> CPC +50<br />\
    <img src="styles/legend/2021_1_32.png" /> CPC +55<br />\
    <img src="styles/legend/2021_1_33.png" /> CPC +60<br />\
    <img src="styles/legend/2021_1_34.png" /> CPC +65<br />\
    <img src="styles/legend/2021_1_35.png" /> CPC +70<br />\
    <img src="styles/legend/2021_1_36.png" /> CPC +75<br />\
    <img src="styles/legend/2021_1_37.png" /> CPC +80<br />\
    <img src="styles/legend/2021_1_38.png" /> CPC +85<br />\
    <img src="styles/legend/2021_1_39.png" /> CPC +90<br />\
    <img src="styles/legend/2021_1_40.png" /> CPC +95<br />\
    <img src="styles/legend/2021_1_41.png" /> CPC +100<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2021_1];
lyr_2021_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CPC': 'CPC', 'NDP': 'NDP', 'LPC': 'LPC', 'PPC': 'PPC', 'OTH': 'OTH', });
lyr_2021_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'LPC': 'TextEdit', 'PPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_2021_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'header label - always visible', 'CPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'LPC': 'inline label - always visible', 'PPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});