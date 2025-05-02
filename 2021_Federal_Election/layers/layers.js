var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_20211_1 = new ol.format.GeoJSON();
var features_20211_1 = format_20211_1.readFeatures(json_20211_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20211_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20211_1.addFeatures(features_20211_1);
var lyr_20211_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20211_1, 
                style: style_20211_1,
                popuplayertitle: '2021-1',
                interactive: true,
    title: '2021-1<br />\
    <img src="styles/legend/20211_1_0.png" /> BQ +1<br />\
    <img src="styles/legend/20211_1_1.png" /> BQ +5<br />\
    <img src="styles/legend/20211_1_2.png" /> BQ +10<br />\
    <img src="styles/legend/20211_1_3.png" /> BQ +15<br />\
    <img src="styles/legend/20211_1_4.png" /> BQ +20<br />\
    <img src="styles/legend/20211_1_5.png" /> BQ +25<br />\
    <img src="styles/legend/20211_1_6.png" /> BQ +30<br />\
    <img src="styles/legend/20211_1_7.png" /> BQ +35<br />\
    <img src="styles/legend/20211_1_8.png" /> CPC +1<br />\
    <img src="styles/legend/20211_1_9.png" /> CPC +5<br />\
    <img src="styles/legend/20211_1_10.png" /> CPC +10<br />\
    <img src="styles/legend/20211_1_11.png" /> CPC +15<br />\
    <img src="styles/legend/20211_1_12.png" /> CPC +20<br />\
    <img src="styles/legend/20211_1_13.png" /> CPC +25<br />\
    <img src="styles/legend/20211_1_14.png" /> CPC +30<br />\
    <img src="styles/legend/20211_1_15.png" /> CPC +35<br />\
    <img src="styles/legend/20211_1_16.png" /> CPC +40<br />\
    <img src="styles/legend/20211_1_17.png" /> CPC +45<br />\
    <img src="styles/legend/20211_1_18.png" /> CPC +50<br />\
    <img src="styles/legend/20211_1_19.png" /> CPC +55<br />\
    <img src="styles/legend/20211_1_20.png" /> CPC +60<br />\
    <img src="styles/legend/20211_1_21.png" /> CPC +65<br />\
    <img src="styles/legend/20211_1_22.png" /> CPC +70<br />\
    <img src="styles/legend/20211_1_23.png" /> GPC +5<br />\
    <img src="styles/legend/20211_1_24.png" /> GPC +10<br />\
    <img src="styles/legend/20211_1_25.png" /> GPC +15<br />\
    <img src="styles/legend/20211_1_26.png" /> LPC +1<br />\
    <img src="styles/legend/20211_1_27.png" /> LPC +5<br />\
    <img src="styles/legend/20211_1_28.png" /> LPC +10<br />\
    <img src="styles/legend/20211_1_29.png" /> LPC +15<br />\
    <img src="styles/legend/20211_1_30.png" /> LPC +20<br />\
    <img src="styles/legend/20211_1_31.png" /> LPC +25<br />\
    <img src="styles/legend/20211_1_32.png" /> LPC +30<br />\
    <img src="styles/legend/20211_1_33.png" /> LPC +35<br />\
    <img src="styles/legend/20211_1_34.png" /> LPC +40<br />\
    <img src="styles/legend/20211_1_35.png" /> LPC +45<br />\
    <img src="styles/legend/20211_1_36.png" /> LPC +50<br />\
    <img src="styles/legend/20211_1_37.png" /> LPC +55<br />\
    <img src="styles/legend/20211_1_38.png" /> NDP +1<br />\
    <img src="styles/legend/20211_1_39.png" /> NDP +5<br />\
    <img src="styles/legend/20211_1_40.png" /> NDP +10<br />\
    <img src="styles/legend/20211_1_41.png" /> NDP +15<br />\
    <img src="styles/legend/20211_1_42.png" /> NDP +20<br />\
    <img src="styles/legend/20211_1_43.png" /> NDP +25<br />\
    <img src="styles/legend/20211_1_44.png" /> NDP +30<br />\
    <img src="styles/legend/20211_1_45.png" /> NDP +35<br />' });
var format_20212_2 = new ol.format.GeoJSON();
var features_20212_2 = format_20212_2.readFeatures(json_20212_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20212_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20212_2.addFeatures(features_20212_2);
var lyr_20212_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20212_2, 
                style: style_20212_2,
                popuplayertitle: '2021-2',
                interactive: true,
    title: '2021-2<br />\
    <img src="styles/legend/20212_2_0.png" /> BQ +1<br />\
    <img src="styles/legend/20212_2_1.png" /> BQ +5<br />\
    <img src="styles/legend/20212_2_2.png" /> BQ +10<br />\
    <img src="styles/legend/20212_2_3.png" /> BQ +15<br />\
    <img src="styles/legend/20212_2_4.png" /> BQ +20<br />\
    <img src="styles/legend/20212_2_5.png" /> BQ +25<br />\
    <img src="styles/legend/20212_2_6.png" /> BQ +30<br />\
    <img src="styles/legend/20212_2_7.png" /> BQ +35<br />\
    <img src="styles/legend/20212_2_8.png" /> CPC +1<br />\
    <img src="styles/legend/20212_2_9.png" /> CPC +5<br />\
    <img src="styles/legend/20212_2_10.png" /> CPC +10<br />\
    <img src="styles/legend/20212_2_11.png" /> CPC +15<br />\
    <img src="styles/legend/20212_2_12.png" /> CPC +20<br />\
    <img src="styles/legend/20212_2_13.png" /> CPC +25<br />\
    <img src="styles/legend/20212_2_14.png" /> CPC +30<br />\
    <img src="styles/legend/20212_2_15.png" /> CPC +35<br />\
    <img src="styles/legend/20212_2_16.png" /> CPC +40<br />\
    <img src="styles/legend/20212_2_17.png" /> CPC +45<br />\
    <img src="styles/legend/20212_2_18.png" /> CPC +50<br />\
    <img src="styles/legend/20212_2_19.png" /> CPC +55<br />\
    <img src="styles/legend/20212_2_20.png" /> CPC +60<br />\
    <img src="styles/legend/20212_2_21.png" /> CPC +65<br />\
    <img src="styles/legend/20212_2_22.png" /> CPC +70<br />\
    <img src="styles/legend/20212_2_23.png" /> GPC +5<br />\
    <img src="styles/legend/20212_2_24.png" /> GPC +10<br />\
    <img src="styles/legend/20212_2_25.png" /> GPC +15<br />\
    <img src="styles/legend/20212_2_26.png" /> LPC +1<br />\
    <img src="styles/legend/20212_2_27.png" /> LPC +5<br />\
    <img src="styles/legend/20212_2_28.png" /> LPC +10<br />\
    <img src="styles/legend/20212_2_29.png" /> LPC +15<br />\
    <img src="styles/legend/20212_2_30.png" /> LPC +20<br />\
    <img src="styles/legend/20212_2_31.png" /> LPC +25<br />\
    <img src="styles/legend/20212_2_32.png" /> LPC +30<br />\
    <img src="styles/legend/20212_2_33.png" /> LPC +35<br />\
    <img src="styles/legend/20212_2_34.png" /> LPC +40<br />\
    <img src="styles/legend/20212_2_35.png" /> LPC +45<br />\
    <img src="styles/legend/20212_2_36.png" /> LPC +50<br />\
    <img src="styles/legend/20212_2_37.png" /> LPC +55<br />\
    <img src="styles/legend/20212_2_38.png" /> NDP +1<br />\
    <img src="styles/legend/20212_2_39.png" /> NDP +5<br />\
    <img src="styles/legend/20212_2_40.png" /> NDP +10<br />\
    <img src="styles/legend/20212_2_41.png" /> NDP +15<br />\
    <img src="styles/legend/20212_2_42.png" /> NDP +20<br />\
    <img src="styles/legend/20212_2_43.png" /> NDP +25<br />\
    <img src="styles/legend/20212_2_44.png" /> NDP +30<br />\
    <img src="styles/legend/20212_2_45.png" /> NDP +35<br />' });
var format_20213_3 = new ol.format.GeoJSON();
var features_20213_3 = format_20213_3.readFeatures(json_20213_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20213_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20213_3.addFeatures(features_20213_3);
var lyr_20213_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20213_3, 
                style: style_20213_3,
                popuplayertitle: '2021-3',
                interactive: true,
    title: '2021-3<br />\
    <img src="styles/legend/20213_3_0.png" /> BQ +1<br />\
    <img src="styles/legend/20213_3_1.png" /> BQ +5<br />\
    <img src="styles/legend/20213_3_2.png" /> BQ +10<br />\
    <img src="styles/legend/20213_3_3.png" /> BQ +15<br />\
    <img src="styles/legend/20213_3_4.png" /> BQ +20<br />\
    <img src="styles/legend/20213_3_5.png" /> BQ +25<br />\
    <img src="styles/legend/20213_3_6.png" /> BQ +30<br />\
    <img src="styles/legend/20213_3_7.png" /> BQ +35<br />\
    <img src="styles/legend/20213_3_8.png" /> CPC +1<br />\
    <img src="styles/legend/20213_3_9.png" /> CPC +5<br />\
    <img src="styles/legend/20213_3_10.png" /> CPC +10<br />\
    <img src="styles/legend/20213_3_11.png" /> CPC +15<br />\
    <img src="styles/legend/20213_3_12.png" /> CPC +20<br />\
    <img src="styles/legend/20213_3_13.png" /> CPC +25<br />\
    <img src="styles/legend/20213_3_14.png" /> CPC +30<br />\
    <img src="styles/legend/20213_3_15.png" /> CPC +35<br />\
    <img src="styles/legend/20213_3_16.png" /> CPC +40<br />\
    <img src="styles/legend/20213_3_17.png" /> CPC +45<br />\
    <img src="styles/legend/20213_3_18.png" /> CPC +50<br />\
    <img src="styles/legend/20213_3_19.png" /> CPC +55<br />\
    <img src="styles/legend/20213_3_20.png" /> CPC +60<br />\
    <img src="styles/legend/20213_3_21.png" /> CPC +65<br />\
    <img src="styles/legend/20213_3_22.png" /> CPC +70<br />\
    <img src="styles/legend/20213_3_23.png" /> GPC +5<br />\
    <img src="styles/legend/20213_3_24.png" /> GPC +10<br />\
    <img src="styles/legend/20213_3_25.png" /> GPC +15<br />\
    <img src="styles/legend/20213_3_26.png" /> LPC +1<br />\
    <img src="styles/legend/20213_3_27.png" /> LPC +5<br />\
    <img src="styles/legend/20213_3_28.png" /> LPC +10<br />\
    <img src="styles/legend/20213_3_29.png" /> LPC +15<br />\
    <img src="styles/legend/20213_3_30.png" /> LPC +20<br />\
    <img src="styles/legend/20213_3_31.png" /> LPC +25<br />\
    <img src="styles/legend/20213_3_32.png" /> LPC +30<br />\
    <img src="styles/legend/20213_3_33.png" /> LPC +35<br />\
    <img src="styles/legend/20213_3_34.png" /> LPC +40<br />\
    <img src="styles/legend/20213_3_35.png" /> LPC +45<br />\
    <img src="styles/legend/20213_3_36.png" /> LPC +50<br />\
    <img src="styles/legend/20213_3_37.png" /> LPC +55<br />\
    <img src="styles/legend/20213_3_38.png" /> NDP +1<br />\
    <img src="styles/legend/20213_3_39.png" /> NDP +5<br />\
    <img src="styles/legend/20213_3_40.png" /> NDP +10<br />\
    <img src="styles/legend/20213_3_41.png" /> NDP +15<br />\
    <img src="styles/legend/20213_3_42.png" /> NDP +20<br />\
    <img src="styles/legend/20213_3_43.png" /> NDP +25<br />\
    <img src="styles/legend/20213_3_44.png" /> NDP +30<br />\
    <img src="styles/legend/20213_3_45.png" /> NDP +35<br />' });
var format_20214_4 = new ol.format.GeoJSON();
var features_20214_4 = format_20214_4.readFeatures(json_20214_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20214_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20214_4.addFeatures(features_20214_4);
var lyr_20214_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20214_4, 
                style: style_20214_4,
                popuplayertitle: '2021-4',
                interactive: true,
    title: '2021-4<br />\
    <img src="styles/legend/20214_4_0.png" /> BQ +1<br />\
    <img src="styles/legend/20214_4_1.png" /> BQ +5<br />\
    <img src="styles/legend/20214_4_2.png" /> BQ +10<br />\
    <img src="styles/legend/20214_4_3.png" /> BQ +15<br />\
    <img src="styles/legend/20214_4_4.png" /> BQ +20<br />\
    <img src="styles/legend/20214_4_5.png" /> BQ +25<br />\
    <img src="styles/legend/20214_4_6.png" /> BQ +30<br />\
    <img src="styles/legend/20214_4_7.png" /> BQ +35<br />\
    <img src="styles/legend/20214_4_8.png" /> CPC +1<br />\
    <img src="styles/legend/20214_4_9.png" /> CPC +5<br />\
    <img src="styles/legend/20214_4_10.png" /> CPC +10<br />\
    <img src="styles/legend/20214_4_11.png" /> CPC +15<br />\
    <img src="styles/legend/20214_4_12.png" /> CPC +20<br />\
    <img src="styles/legend/20214_4_13.png" /> CPC +25<br />\
    <img src="styles/legend/20214_4_14.png" /> CPC +30<br />\
    <img src="styles/legend/20214_4_15.png" /> CPC +35<br />\
    <img src="styles/legend/20214_4_16.png" /> CPC +40<br />\
    <img src="styles/legend/20214_4_17.png" /> CPC +45<br />\
    <img src="styles/legend/20214_4_18.png" /> CPC +50<br />\
    <img src="styles/legend/20214_4_19.png" /> CPC +55<br />\
    <img src="styles/legend/20214_4_20.png" /> CPC +60<br />\
    <img src="styles/legend/20214_4_21.png" /> CPC +65<br />\
    <img src="styles/legend/20214_4_22.png" /> CPC +70<br />\
    <img src="styles/legend/20214_4_23.png" /> GPC +5<br />\
    <img src="styles/legend/20214_4_24.png" /> GPC +10<br />\
    <img src="styles/legend/20214_4_25.png" /> GPC +15<br />\
    <img src="styles/legend/20214_4_26.png" /> LPC +1<br />\
    <img src="styles/legend/20214_4_27.png" /> LPC +5<br />\
    <img src="styles/legend/20214_4_28.png" /> LPC +10<br />\
    <img src="styles/legend/20214_4_29.png" /> LPC +15<br />\
    <img src="styles/legend/20214_4_30.png" /> LPC +20<br />\
    <img src="styles/legend/20214_4_31.png" /> LPC +25<br />\
    <img src="styles/legend/20214_4_32.png" /> LPC +30<br />\
    <img src="styles/legend/20214_4_33.png" /> LPC +35<br />\
    <img src="styles/legend/20214_4_34.png" /> LPC +40<br />\
    <img src="styles/legend/20214_4_35.png" /> LPC +45<br />\
    <img src="styles/legend/20214_4_36.png" /> LPC +50<br />\
    <img src="styles/legend/20214_4_37.png" /> LPC +55<br />\
    <img src="styles/legend/20214_4_38.png" /> NDP +1<br />\
    <img src="styles/legend/20214_4_39.png" /> NDP +5<br />\
    <img src="styles/legend/20214_4_40.png" /> NDP +10<br />\
    <img src="styles/legend/20214_4_41.png" /> NDP +15<br />\
    <img src="styles/legend/20214_4_42.png" /> NDP +20<br />\
    <img src="styles/legend/20214_4_43.png" /> NDP +25<br />\
    <img src="styles/legend/20214_4_44.png" /> NDP +30<br />\
    <img src="styles/legend/20214_4_45.png" /> NDP +35<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_20211_1.setVisible(true);lyr_20212_2.setVisible(true);lyr_20213_3.setVisible(true);lyr_20214_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20211_1,lyr_20212_2,lyr_20213_3,lyr_20214_4];
lyr_20211_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CPC': 'CPC', 'LPC': 'LPC', 'NDP': 'NDP', 'BQ': 'BQ', 'PPC': 'PPC', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20212_2.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CPC': 'CPC', 'LPC': 'LPC', 'NDP': 'NDP', 'BQ': 'BQ', 'PPC': 'PPC', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20213_3.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CPC': 'CPC', 'LPC': 'LPC', 'NDP': 'NDP', 'BQ': 'BQ', 'PPC': 'PPC', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20214_4.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CPC': 'CPC', 'LPC': 'LPC', 'NDP': 'NDP', 'BQ': 'BQ', 'PPC': 'PPC', 'GPC': 'GPC', 'OTH': 'OTH', });
lyr_20211_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CPC': 'TextEdit', 'LPC': 'TextEdit', 'NDP': 'TextEdit', 'BQ': 'TextEdit', 'PPC': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20212_2.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CPC': 'TextEdit', 'LPC': 'TextEdit', 'NDP': 'TextEdit', 'BQ': 'TextEdit', 'PPC': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20213_3.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CPC': 'TextEdit', 'LPC': 'TextEdit', 'NDP': 'TextEdit', 'BQ': 'TextEdit', 'PPC': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20214_4.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CPC': 'TextEdit', 'LPC': 'TextEdit', 'NDP': 'TextEdit', 'BQ': 'TextEdit', 'PPC': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_20211_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'CPC': 'inline label - always visible', 'LPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'BQ': 'inline label - always visible', 'PPC': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20212_2.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'CPC': 'inline label - always visible', 'LPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'BQ': 'inline label - always visible', 'PPC': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20213_3.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'CPC': 'inline label - always visible', 'LPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'BQ': 'inline label - always visible', 'PPC': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20214_4.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'CPC': 'inline label - always visible', 'LPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'BQ': 'inline label - always visible', 'PPC': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_20214_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});