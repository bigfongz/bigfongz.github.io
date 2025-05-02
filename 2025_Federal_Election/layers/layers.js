var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_20251_1 = new ol.format.GeoJSON();
var features_20251_1 = format_20251_1.readFeatures(json_20251_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20251_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20251_1.addFeatures(features_20251_1);
var lyr_20251_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20251_1, 
                style: style_20251_1,
                popuplayertitle: '2025-1',
                interactive: true,
    title: '2025-1<br />\
    <img src="styles/legend/20251_1_0.png" /> BQ +1<br />\
    <img src="styles/legend/20251_1_1.png" /> BQ +5<br />\
    <img src="styles/legend/20251_1_2.png" /> BQ +10<br />\
    <img src="styles/legend/20251_1_3.png" /> BQ +15<br />\
    <img src="styles/legend/20251_1_4.png" /> BQ +20<br />\
    <img src="styles/legend/20251_1_5.png" /> CPC +1<br />\
    <img src="styles/legend/20251_1_6.png" /> CPC +5<br />\
    <img src="styles/legend/20251_1_7.png" /> CPC +10<br />\
    <img src="styles/legend/20251_1_8.png" /> CPC +15<br />\
    <img src="styles/legend/20251_1_9.png" /> CPC +20<br />\
    <img src="styles/legend/20251_1_10.png" /> CPC +25<br />\
    <img src="styles/legend/20251_1_11.png" /> CPC +30<br />\
    <img src="styles/legend/20251_1_12.png" /> CPC +35<br />\
    <img src="styles/legend/20251_1_13.png" /> CPC +40<br />\
    <img src="styles/legend/20251_1_14.png" /> CPC +45<br />\
    <img src="styles/legend/20251_1_15.png" /> CPC +50<br />\
    <img src="styles/legend/20251_1_16.png" /> CPC +55<br />\
    <img src="styles/legend/20251_1_17.png" /> CPC +60<br />\
    <img src="styles/legend/20251_1_18.png" /> CPC +65<br />\
    <img src="styles/legend/20251_1_19.png" /> CPC +70<br />\
    <img src="styles/legend/20251_1_20.png" /> GPC +5<br />\
    <img src="styles/legend/20251_1_21.png" /> LPC +1<br />\
    <img src="styles/legend/20251_1_22.png" /> LPC +5<br />\
    <img src="styles/legend/20251_1_23.png" /> LPC +10<br />\
    <img src="styles/legend/20251_1_24.png" /> LPC +15<br />\
    <img src="styles/legend/20251_1_25.png" /> LPC +20<br />\
    <img src="styles/legend/20251_1_26.png" /> LPC +25<br />\
    <img src="styles/legend/20251_1_27.png" /> LPC +30<br />\
    <img src="styles/legend/20251_1_28.png" /> LPC +35<br />\
    <img src="styles/legend/20251_1_29.png" /> LPC +40<br />\
    <img src="styles/legend/20251_1_30.png" /> LPC +45<br />\
    <img src="styles/legend/20251_1_31.png" /> NDP +1<br />\
    <img src="styles/legend/20251_1_32.png" /> NDP +5<br />\
    <img src="styles/legend/20251_1_33.png" /> NDP +10<br />' });
var format_20252_2 = new ol.format.GeoJSON();
var features_20252_2 = format_20252_2.readFeatures(json_20252_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20252_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20252_2.addFeatures(features_20252_2);
var lyr_20252_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20252_2, 
                style: style_20252_2,
                popuplayertitle: '2025-2',
                interactive: true,
    title: '2025-2<br />\
    <img src="styles/legend/20252_2_0.png" /> BQ +1<br />\
    <img src="styles/legend/20252_2_1.png" /> BQ +5<br />\
    <img src="styles/legend/20252_2_2.png" /> BQ +10<br />\
    <img src="styles/legend/20252_2_3.png" /> BQ +15<br />\
    <img src="styles/legend/20252_2_4.png" /> BQ +20<br />\
    <img src="styles/legend/20252_2_5.png" /> CPC +1<br />\
    <img src="styles/legend/20252_2_6.png" /> CPC +5<br />\
    <img src="styles/legend/20252_2_7.png" /> CPC +10<br />\
    <img src="styles/legend/20252_2_8.png" /> CPC +15<br />\
    <img src="styles/legend/20252_2_9.png" /> CPC +20<br />\
    <img src="styles/legend/20252_2_10.png" /> CPC +25<br />\
    <img src="styles/legend/20252_2_11.png" /> CPC +30<br />\
    <img src="styles/legend/20252_2_12.png" /> CPC +35<br />\
    <img src="styles/legend/20252_2_13.png" /> CPC +40<br />\
    <img src="styles/legend/20252_2_14.png" /> CPC +45<br />\
    <img src="styles/legend/20252_2_15.png" /> CPC +50<br />\
    <img src="styles/legend/20252_2_16.png" /> CPC +55<br />\
    <img src="styles/legend/20252_2_17.png" /> CPC +60<br />\
    <img src="styles/legend/20252_2_18.png" /> CPC +65<br />\
    <img src="styles/legend/20252_2_19.png" /> CPC +70<br />\
    <img src="styles/legend/20252_2_20.png" /> GPC +5<br />\
    <img src="styles/legend/20252_2_21.png" /> LPC +1<br />\
    <img src="styles/legend/20252_2_22.png" /> LPC +5<br />\
    <img src="styles/legend/20252_2_23.png" /> LPC +10<br />\
    <img src="styles/legend/20252_2_24.png" /> LPC +15<br />\
    <img src="styles/legend/20252_2_25.png" /> LPC +20<br />\
    <img src="styles/legend/20252_2_26.png" /> LPC +25<br />\
    <img src="styles/legend/20252_2_27.png" /> LPC +30<br />\
    <img src="styles/legend/20252_2_28.png" /> LPC +35<br />\
    <img src="styles/legend/20252_2_29.png" /> LPC +40<br />\
    <img src="styles/legend/20252_2_30.png" /> LPC +45<br />\
    <img src="styles/legend/20252_2_31.png" /> NDP +1<br />\
    <img src="styles/legend/20252_2_32.png" /> NDP +5<br />\
    <img src="styles/legend/20252_2_33.png" /> NDP +10<br />' });
var format_20253_3 = new ol.format.GeoJSON();
var features_20253_3 = format_20253_3.readFeatures(json_20253_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20253_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20253_3.addFeatures(features_20253_3);
var lyr_20253_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20253_3, 
                style: style_20253_3,
                popuplayertitle: '2025-3',
                interactive: true,
    title: '2025-3<br />\
    <img src="styles/legend/20253_3_0.png" /> BQ +1<br />\
    <img src="styles/legend/20253_3_1.png" /> BQ +5<br />\
    <img src="styles/legend/20253_3_2.png" /> BQ +10<br />\
    <img src="styles/legend/20253_3_3.png" /> BQ +15<br />\
    <img src="styles/legend/20253_3_4.png" /> BQ +20<br />\
    <img src="styles/legend/20253_3_5.png" /> CPC +1<br />\
    <img src="styles/legend/20253_3_6.png" /> CPC +5<br />\
    <img src="styles/legend/20253_3_7.png" /> CPC +10<br />\
    <img src="styles/legend/20253_3_8.png" /> CPC +15<br />\
    <img src="styles/legend/20253_3_9.png" /> CPC +20<br />\
    <img src="styles/legend/20253_3_10.png" /> CPC +25<br />\
    <img src="styles/legend/20253_3_11.png" /> CPC +30<br />\
    <img src="styles/legend/20253_3_12.png" /> CPC +35<br />\
    <img src="styles/legend/20253_3_13.png" /> CPC +40<br />\
    <img src="styles/legend/20253_3_14.png" /> CPC +45<br />\
    <img src="styles/legend/20253_3_15.png" /> CPC +50<br />\
    <img src="styles/legend/20253_3_16.png" /> CPC +55<br />\
    <img src="styles/legend/20253_3_17.png" /> CPC +60<br />\
    <img src="styles/legend/20253_3_18.png" /> CPC +65<br />\
    <img src="styles/legend/20253_3_19.png" /> CPC +70<br />\
    <img src="styles/legend/20253_3_20.png" /> GPC +5<br />\
    <img src="styles/legend/20253_3_21.png" /> LPC +1<br />\
    <img src="styles/legend/20253_3_22.png" /> LPC +5<br />\
    <img src="styles/legend/20253_3_23.png" /> LPC +10<br />\
    <img src="styles/legend/20253_3_24.png" /> LPC +15<br />\
    <img src="styles/legend/20253_3_25.png" /> LPC +20<br />\
    <img src="styles/legend/20253_3_26.png" /> LPC +25<br />\
    <img src="styles/legend/20253_3_27.png" /> LPC +30<br />\
    <img src="styles/legend/20253_3_28.png" /> LPC +35<br />\
    <img src="styles/legend/20253_3_29.png" /> LPC +40<br />\
    <img src="styles/legend/20253_3_30.png" /> LPC +45<br />\
    <img src="styles/legend/20253_3_31.png" /> NDP +1<br />\
    <img src="styles/legend/20253_3_32.png" /> NDP +5<br />\
    <img src="styles/legend/20253_3_33.png" /> NDP +10<br />' });
var format_20254_4 = new ol.format.GeoJSON();
var features_20254_4 = format_20254_4.readFeatures(json_20254_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20254_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20254_4.addFeatures(features_20254_4);
var lyr_20254_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20254_4, 
                style: style_20254_4,
                popuplayertitle: '2025-4',
                interactive: true,
    title: '2025-4<br />\
    <img src="styles/legend/20254_4_0.png" /> BQ +1<br />\
    <img src="styles/legend/20254_4_1.png" /> BQ +5<br />\
    <img src="styles/legend/20254_4_2.png" /> BQ +10<br />\
    <img src="styles/legend/20254_4_3.png" /> BQ +15<br />\
    <img src="styles/legend/20254_4_4.png" /> BQ +20<br />\
    <img src="styles/legend/20254_4_5.png" /> CPC +1<br />\
    <img src="styles/legend/20254_4_6.png" /> CPC +5<br />\
    <img src="styles/legend/20254_4_7.png" /> CPC +10<br />\
    <img src="styles/legend/20254_4_8.png" /> CPC +15<br />\
    <img src="styles/legend/20254_4_9.png" /> CPC +20<br />\
    <img src="styles/legend/20254_4_10.png" /> CPC +25<br />\
    <img src="styles/legend/20254_4_11.png" /> CPC +30<br />\
    <img src="styles/legend/20254_4_12.png" /> CPC +35<br />\
    <img src="styles/legend/20254_4_13.png" /> CPC +40<br />\
    <img src="styles/legend/20254_4_14.png" /> CPC +45<br />\
    <img src="styles/legend/20254_4_15.png" /> CPC +50<br />\
    <img src="styles/legend/20254_4_16.png" /> CPC +55<br />\
    <img src="styles/legend/20254_4_17.png" /> CPC +60<br />\
    <img src="styles/legend/20254_4_18.png" /> CPC +65<br />\
    <img src="styles/legend/20254_4_19.png" /> CPC +70<br />\
    <img src="styles/legend/20254_4_20.png" /> GPC +5<br />\
    <img src="styles/legend/20254_4_21.png" /> LPC +1<br />\
    <img src="styles/legend/20254_4_22.png" /> LPC +5<br />\
    <img src="styles/legend/20254_4_23.png" /> LPC +10<br />\
    <img src="styles/legend/20254_4_24.png" /> LPC +15<br />\
    <img src="styles/legend/20254_4_25.png" /> LPC +20<br />\
    <img src="styles/legend/20254_4_26.png" /> LPC +25<br />\
    <img src="styles/legend/20254_4_27.png" /> LPC +30<br />\
    <img src="styles/legend/20254_4_28.png" /> LPC +35<br />\
    <img src="styles/legend/20254_4_29.png" /> LPC +40<br />\
    <img src="styles/legend/20254_4_30.png" /> LPC +45<br />\
    <img src="styles/legend/20254_4_31.png" /> NDP +1<br />\
    <img src="styles/legend/20254_4_32.png" /> NDP +5<br />\
    <img src="styles/legend/20254_4_33.png" /> NDP +10<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_20251_1.setVisible(true);lyr_20252_2.setVisible(true);lyr_20253_3.setVisible(true);lyr_20254_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20251_1,lyr_20252_2,lyr_20253_3,lyr_20254_4];
lyr_20251_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LPC': 'LPC', 'CPC': 'CPC', 'BQ': 'BQ', 'NDP': 'NDP', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20252_2.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LPC': 'LPC', 'CPC': 'CPC', 'BQ': 'BQ', 'NDP': 'NDP', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20253_3.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LPC': 'LPC', 'CPC': 'CPC', 'BQ': 'BQ', 'NDP': 'NDP', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20254_4.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LPC': 'LPC', 'CPC': 'CPC', 'BQ': 'BQ', 'NDP': 'NDP', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20251_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LPC': 'TextEdit', 'CPC': 'TextEdit', 'BQ': 'TextEdit', 'NDP': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20252_2.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LPC': 'TextEdit', 'CPC': 'TextEdit', 'BQ': 'TextEdit', 'NDP': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20253_3.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LPC': 'TextEdit', 'CPC': 'TextEdit', 'BQ': 'TextEdit', 'NDP': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20254_4.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LPC': 'TextEdit', 'CPC': 'TextEdit', 'BQ': 'TextEdit', 'NDP': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20251_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'BQ': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20252_2.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'BQ': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20253_3.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'BQ': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20254_4.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'BQ': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20254_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});