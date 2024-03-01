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
var format_20182_1 = new ol.format.GeoJSON();
var features_20182_1 = format_20182_1.readFeatures(json_20182_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20182_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20182_1.addFeatures(features_20182_1);
var lyr_20182_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20182_1, 
                style: style_20182_1,
                popuplayertitle: "2018-2",
                interactive: true,
    title: '2018-2<br />\
    <img src="styles/legend/20182_1_0.png" /> GRN +10<br />\
    <img src="styles/legend/20182_1_1.png" /> GRN +15<br />\
    <img src="styles/legend/20182_1_2.png" /> GRN +20<br />\
    <img src="styles/legend/20182_1_3.png" /> GRN +25<br />\
    <img src="styles/legend/20182_1_4.png" /> GRN +35<br />\
    <img src="styles/legend/20182_1_5.png" /> LIB +1<br />\
    <img src="styles/legend/20182_1_6.png" /> LIB +5<br />\
    <img src="styles/legend/20182_1_7.png" /> LIB +10<br />\
    <img src="styles/legend/20182_1_8.png" /> LIB +15<br />\
    <img src="styles/legend/20182_1_9.png" /> LIB +20<br />\
    <img src="styles/legend/20182_1_10.png" /> NDP +1<br />\
    <img src="styles/legend/20182_1_11.png" /> NDP +5<br />\
    <img src="styles/legend/20182_1_12.png" /> NDP +10<br />\
    <img src="styles/legend/20182_1_13.png" /> NDP +15<br />\
    <img src="styles/legend/20182_1_14.png" /> NDP +20<br />\
    <img src="styles/legend/20182_1_15.png" /> NDP +25<br />\
    <img src="styles/legend/20182_1_16.png" /> NDP +30<br />\
    <img src="styles/legend/20182_1_17.png" /> NDP +35<br />\
    <img src="styles/legend/20182_1_18.png" /> NDP +40<br />\
    <img src="styles/legend/20182_1_19.png" /> NDP +45<br />\
    <img src="styles/legend/20182_1_20.png" /> NDP +50<br />\
    <img src="styles/legend/20182_1_21.png" /> NDP +65<br />\
    <img src="styles/legend/20182_1_22.png" /> PC +1<br />\
    <img src="styles/legend/20182_1_23.png" /> PC +5<br />\
    <img src="styles/legend/20182_1_24.png" /> PC +10<br />\
    <img src="styles/legend/20182_1_25.png" /> PC +15<br />\
    <img src="styles/legend/20182_1_26.png" /> PC +20<br />\
    <img src="styles/legend/20182_1_27.png" /> PC +25<br />\
    <img src="styles/legend/20182_1_28.png" /> PC +30<br />\
    <img src="styles/legend/20182_1_29.png" /> PC +35<br />\
    <img src="styles/legend/20182_1_30.png" /> PC +40<br />\
    <img src="styles/legend/20182_1_31.png" /> PC +45<br />\
    <img src="styles/legend/20182_1_32.png" /> PC +50<br />\
    <img src="styles/legend/20182_1_33.png" /> PC +55<br />'
        });
var format_20181_2 = new ol.format.GeoJSON();
var features_20181_2 = format_20181_2.readFeatures(json_20181_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20181_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20181_2.addFeatures(features_20181_2);
var lyr_20181_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20181_2, 
                style: style_20181_2,
                popuplayertitle: "2018-1",
                interactive: true,
    title: '2018-1<br />\
    <img src="styles/legend/20181_2_0.png" /> GRN +10<br />\
    <img src="styles/legend/20181_2_1.png" /> GRN +15<br />\
    <img src="styles/legend/20181_2_2.png" /> GRN +20<br />\
    <img src="styles/legend/20181_2_3.png" /> GRN +25<br />\
    <img src="styles/legend/20181_2_4.png" /> GRN +35<br />\
    <img src="styles/legend/20181_2_5.png" /> LIB +1<br />\
    <img src="styles/legend/20181_2_6.png" /> LIB +5<br />\
    <img src="styles/legend/20181_2_7.png" /> LIB +10<br />\
    <img src="styles/legend/20181_2_8.png" /> LIB +15<br />\
    <img src="styles/legend/20181_2_9.png" /> LIB +20<br />\
    <img src="styles/legend/20181_2_10.png" /> NDP +1<br />\
    <img src="styles/legend/20181_2_11.png" /> NDP +5<br />\
    <img src="styles/legend/20181_2_12.png" /> NDP +10<br />\
    <img src="styles/legend/20181_2_13.png" /> NDP +15<br />\
    <img src="styles/legend/20181_2_14.png" /> NDP +20<br />\
    <img src="styles/legend/20181_2_15.png" /> NDP +25<br />\
    <img src="styles/legend/20181_2_16.png" /> NDP +30<br />\
    <img src="styles/legend/20181_2_17.png" /> NDP +35<br />\
    <img src="styles/legend/20181_2_18.png" /> NDP +40<br />\
    <img src="styles/legend/20181_2_19.png" /> NDP +45<br />\
    <img src="styles/legend/20181_2_20.png" /> NDP +50<br />\
    <img src="styles/legend/20181_2_21.png" /> NDP +65<br />\
    <img src="styles/legend/20181_2_22.png" /> PC +1<br />\
    <img src="styles/legend/20181_2_23.png" /> PC +5<br />\
    <img src="styles/legend/20181_2_24.png" /> PC +10<br />\
    <img src="styles/legend/20181_2_25.png" /> PC +15<br />\
    <img src="styles/legend/20181_2_26.png" /> PC +20<br />\
    <img src="styles/legend/20181_2_27.png" /> PC +25<br />\
    <img src="styles/legend/20181_2_28.png" /> PC +30<br />\
    <img src="styles/legend/20181_2_29.png" /> PC +35<br />\
    <img src="styles/legend/20181_2_30.png" /> PC +40<br />\
    <img src="styles/legend/20181_2_31.png" /> PC +45<br />\
    <img src="styles/legend/20181_2_32.png" /> PC +50<br />\
    <img src="styles/legend/20181_2_33.png" /> PC +55<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_20182_1.setVisible(true);lyr_20181_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20182_1,lyr_20181_2];
lyr_20182_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'PC': 'PC', 'NDP': 'NDP', 'LIB': 'LIB', 'GRN': 'GRN', 'OTH': 'OTH', });
lyr_20181_2.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'PC': 'PC', 'NDP': 'NDP', 'LIB': 'LIB', 'GRN': 'GRN', 'OTH': 'OTH', });
lyr_20182_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'PC': 'TextEdit', 'NDP': 'TextEdit', 'LIB': 'TextEdit', 'GRN': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20181_2.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'PC': 'TextEdit', 'NDP': 'TextEdit', 'LIB': 'TextEdit', 'GRN': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20182_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'PC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'LIB': 'inline label - always visible', 'GRN': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20181_2.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'PC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'LIB': 'inline label - always visible', 'GRN': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20181_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});