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
var format_2019_1 = new ol.format.GeoJSON();
var features_2019_1 = format_2019_1.readFeatures(json_2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_1.addFeatures(features_2019_1);
var lyr_2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_1, 
                style: style_2019_1,
                popuplayertitle: "2019",
                interactive: true,
    title: '2019<br />\
    <img src="styles/legend/2019_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/2019_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/2019_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/2019_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/2019_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/2019_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/2019_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/2019_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/2019_1_8.png" /> NDP +40<br />\
    <img src="styles/legend/2019_1_9.png" /> NDP +45<br />\
    <img src="styles/legend/2019_1_10.png" /> NDP +50<br />\
    <img src="styles/legend/2019_1_11.png" /> NDP +55<br />\
    <img src="styles/legend/2019_1_12.png" /> NDP +60<br />\
    <img src="styles/legend/2019_1_13.png" /> NDP +65<br />\
    <img src="styles/legend/2019_1_14.png" /> NDP +70<br />\
    <img src="styles/legend/2019_1_15.png" /> NDP +75<br />\
    <img src="styles/legend/2019_1_16.png" /> NDP +80<br />\
    <img src="styles/legend/2019_1_17.png" /> NDP +85<br />\
    <img src="styles/legend/2019_1_18.png" /> NDP +90<br />\
    <img src="styles/legend/2019_1_19.png" /> NDP +95<br />\
    <img src="styles/legend/2019_1_20.png" /> NDP +100<br />\
    <img src="styles/legend/2019_1_21.png" /> CPC +1<br />\
    <img src="styles/legend/2019_1_22.png" /> CPC +5<br />\
    <img src="styles/legend/2019_1_23.png" /> CPC +10<br />\
    <img src="styles/legend/2019_1_24.png" /> CPC +15<br />\
    <img src="styles/legend/2019_1_25.png" /> CPC +20<br />\
    <img src="styles/legend/2019_1_26.png" /> CPC +25<br />\
    <img src="styles/legend/2019_1_27.png" /> CPC +30<br />\
    <img src="styles/legend/2019_1_28.png" /> CPC +35<br />\
    <img src="styles/legend/2019_1_29.png" /> CPC +40<br />\
    <img src="styles/legend/2019_1_30.png" /> CPC +45<br />\
    <img src="styles/legend/2019_1_31.png" /> CPC +50<br />\
    <img src="styles/legend/2019_1_32.png" /> CPC +55<br />\
    <img src="styles/legend/2019_1_33.png" /> CPC +60<br />\
    <img src="styles/legend/2019_1_34.png" /> CPC +65<br />\
    <img src="styles/legend/2019_1_35.png" /> CPC +70<br />\
    <img src="styles/legend/2019_1_36.png" /> CPC +75<br />\
    <img src="styles/legend/2019_1_37.png" /> CPC +80<br />\
    <img src="styles/legend/2019_1_38.png" /> CPC +85<br />\
    <img src="styles/legend/2019_1_39.png" /> CPC +90<br />\
    <img src="styles/legend/2019_1_40.png" /> CPC +95<br />\
    <img src="styles/legend/2019_1_41.png" /> CPC +100<br />\
    <img src="styles/legend/2019_1_42.png" /> LPC +1<br />\
    <img src="styles/legend/2019_1_43.png" /> LPC +5<br />\
    <img src="styles/legend/2019_1_44.png" /> LPC +10<br />\
    <img src="styles/legend/2019_1_45.png" /> LPC +15<br />\
    <img src="styles/legend/2019_1_46.png" /> LPC +20<br />\
    <img src="styles/legend/2019_1_47.png" /> LPC +25<br />\
    <img src="styles/legend/2019_1_48.png" /> LPC +30<br />\
    <img src="styles/legend/2019_1_49.png" /> LPC +35<br />\
    <img src="styles/legend/2019_1_50.png" /> LPC +40<br />\
    <img src="styles/legend/2019_1_51.png" /> LPC +45<br />\
    <img src="styles/legend/2019_1_52.png" /> LPC +50<br />\
    <img src="styles/legend/2019_1_53.png" /> LPC +55<br />\
    <img src="styles/legend/2019_1_54.png" /> LPC +60<br />\
    <img src="styles/legend/2019_1_55.png" /> LPC +65<br />\
    <img src="styles/legend/2019_1_56.png" /> LPC +70<br />\
    <img src="styles/legend/2019_1_57.png" /> LPC +75<br />\
    <img src="styles/legend/2019_1_58.png" /> LPC +80<br />\
    <img src="styles/legend/2019_1_59.png" /> LPC +85<br />\
    <img src="styles/legend/2019_1_60.png" /> LPC +90<br />\
    <img src="styles/legend/2019_1_61.png" /> LPC +95<br />\
    <img src="styles/legend/2019_1_62.png" /> LPC +100<br />\
    <img src="styles/legend/2019_1_63.png" /> GPC +1<br />\
    <img src="styles/legend/2019_1_64.png" /> GPC +5<br />\
    <img src="styles/legend/2019_1_65.png" /> GPC +10<br />\
    <img src="styles/legend/2019_1_66.png" /> GPC +15<br />\
    <img src="styles/legend/2019_1_67.png" /> GPC +20<br />\
    <img src="styles/legend/2019_1_68.png" /> GPC +25<br />\
    <img src="styles/legend/2019_1_69.png" /> GPC +30<br />\
    <img src="styles/legend/2019_1_70.png" /> GPC +35<br />\
    <img src="styles/legend/2019_1_71.png" /> GPC +40<br />\
    <img src="styles/legend/2019_1_72.png" /> GPC +45<br />\
    <img src="styles/legend/2019_1_73.png" /> GPC +50<br />\
    <img src="styles/legend/2019_1_74.png" /> GPC +55<br />\
    <img src="styles/legend/2019_1_75.png" /> GPC +60<br />\
    <img src="styles/legend/2019_1_76.png" /> GPC +65<br />\
    <img src="styles/legend/2019_1_77.png" /> GPC +70<br />\
    <img src="styles/legend/2019_1_78.png" /> GPC +75<br />\
    <img src="styles/legend/2019_1_79.png" /> GPC +80<br />\
    <img src="styles/legend/2019_1_80.png" /> GPC +85<br />\
    <img src="styles/legend/2019_1_81.png" /> GPC +90<br />\
    <img src="styles/legend/2019_1_82.png" /> GPC +95<br />\
    <img src="styles/legend/2019_1_83.png" /> GPC +100<br />\
    <img src="styles/legend/2019_1_84.png" /> 0<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2019_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2019_1];
lyr_2019_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'LPC': 'LPC', 'CPC': 'CPC', 'NDP': 'NDP', 'GPC': 'GPC', 'PPC': 'PPC', 'OTH': 'OTH', });
lyr_2019_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'LPC': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'GPC': 'TextEdit', 'PPC': 'TextEdit', 'OTH': 'TextEdit', });
lyr_2019_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'PPC': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_2019_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});