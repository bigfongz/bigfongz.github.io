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
var format_CSDs_1 = new ol.format.GeoJSON();
var features_CSDs_1 = format_CSDs_1.readFeatures(json_CSDs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CSDs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CSDs_1.addFeatures(features_CSDs_1);
var lyr_CSDs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CSDs_1, 
                style: style_CSDs_1,
                popuplayertitle: "!CSDs",
                interactive: true,
    title: '!CSDs<br />\
    <img src="styles/legend/CSDs_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/CSDs_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/CSDs_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/CSDs_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/CSDs_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/CSDs_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/CSDs_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/CSDs_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/CSDs_1_8.png" /> NDP +40<br />\
    <img src="styles/legend/CSDs_1_9.png" /> NDP +45<br />\
    <img src="styles/legend/CSDs_1_10.png" /> NDP +50<br />\
    <img src="styles/legend/CSDs_1_11.png" /> NDP +55<br />\
    <img src="styles/legend/CSDs_1_12.png" /> NDP +60<br />\
    <img src="styles/legend/CSDs_1_13.png" /> NDP +65<br />\
    <img src="styles/legend/CSDs_1_14.png" /> NDP +70<br />\
    <img src="styles/legend/CSDs_1_15.png" /> NDP +75<br />\
    <img src="styles/legend/CSDs_1_16.png" /> NDP +80<br />\
    <img src="styles/legend/CSDs_1_17.png" /> NDP +85<br />\
    <img src="styles/legend/CSDs_1_18.png" /> NDP +90<br />\
    <img src="styles/legend/CSDs_1_19.png" /> NDP +95<br />\
    <img src="styles/legend/CSDs_1_20.png" /> NDP +100<br />\
    <img src="styles/legend/CSDs_1_21.png" /> CPC +1<br />\
    <img src="styles/legend/CSDs_1_22.png" /> CPC +5<br />\
    <img src="styles/legend/CSDs_1_23.png" /> CPC +10<br />\
    <img src="styles/legend/CSDs_1_24.png" /> CPC +15<br />\
    <img src="styles/legend/CSDs_1_25.png" /> CPC +20<br />\
    <img src="styles/legend/CSDs_1_26.png" /> CPC +25<br />\
    <img src="styles/legend/CSDs_1_27.png" /> CPC +30<br />\
    <img src="styles/legend/CSDs_1_28.png" /> CPC +35<br />\
    <img src="styles/legend/CSDs_1_29.png" /> CPC +40<br />\
    <img src="styles/legend/CSDs_1_30.png" /> CPC +45<br />\
    <img src="styles/legend/CSDs_1_31.png" /> CPC +50<br />\
    <img src="styles/legend/CSDs_1_32.png" /> CPC +55<br />\
    <img src="styles/legend/CSDs_1_33.png" /> CPC +60<br />\
    <img src="styles/legend/CSDs_1_34.png" /> CPC +65<br />\
    <img src="styles/legend/CSDs_1_35.png" /> CPC +70<br />\
    <img src="styles/legend/CSDs_1_36.png" /> CPC +75<br />\
    <img src="styles/legend/CSDs_1_37.png" /> CPC +80<br />\
    <img src="styles/legend/CSDs_1_38.png" /> CPC +85<br />\
    <img src="styles/legend/CSDs_1_39.png" /> CPC +90<br />\
    <img src="styles/legend/CSDs_1_40.png" /> CPC +95<br />\
    <img src="styles/legend/CSDs_1_41.png" /> CPC +100<br />\
    <img src="styles/legend/CSDs_1_42.png" /> LPC +1<br />\
    <img src="styles/legend/CSDs_1_43.png" /> LPC +5<br />\
    <img src="styles/legend/CSDs_1_44.png" /> LPC +10<br />\
    <img src="styles/legend/CSDs_1_45.png" /> LPC +15<br />\
    <img src="styles/legend/CSDs_1_46.png" /> LPC +20<br />\
    <img src="styles/legend/CSDs_1_47.png" /> LPC +25<br />\
    <img src="styles/legend/CSDs_1_48.png" /> LPC +30<br />\
    <img src="styles/legend/CSDs_1_49.png" /> LPC +35<br />\
    <img src="styles/legend/CSDs_1_50.png" /> LPC +40<br />\
    <img src="styles/legend/CSDs_1_51.png" /> LPC +45<br />\
    <img src="styles/legend/CSDs_1_52.png" /> LPC +50<br />\
    <img src="styles/legend/CSDs_1_53.png" /> LPC +55<br />\
    <img src="styles/legend/CSDs_1_54.png" /> LPC +60<br />\
    <img src="styles/legend/CSDs_1_55.png" /> LPC +65<br />\
    <img src="styles/legend/CSDs_1_56.png" /> LPC +70<br />\
    <img src="styles/legend/CSDs_1_57.png" /> LPC +75<br />\
    <img src="styles/legend/CSDs_1_58.png" /> LPC +80<br />\
    <img src="styles/legend/CSDs_1_59.png" /> LPC +85<br />\
    <img src="styles/legend/CSDs_1_60.png" /> LPC +90<br />\
    <img src="styles/legend/CSDs_1_61.png" /> LPC +95<br />\
    <img src="styles/legend/CSDs_1_62.png" /> LPC +100<br />\
    <img src="styles/legend/CSDs_1_63.png" /> GPC +1<br />\
    <img src="styles/legend/CSDs_1_64.png" /> GPC +5<br />\
    <img src="styles/legend/CSDs_1_65.png" /> GPC +10<br />\
    <img src="styles/legend/CSDs_1_66.png" /> GPC +15<br />\
    <img src="styles/legend/CSDs_1_67.png" /> GPC +20<br />\
    <img src="styles/legend/CSDs_1_68.png" /> GPC +25<br />\
    <img src="styles/legend/CSDs_1_69.png" /> GPC +30<br />\
    <img src="styles/legend/CSDs_1_70.png" /> GPC +35<br />\
    <img src="styles/legend/CSDs_1_71.png" /> GPC +40<br />\
    <img src="styles/legend/CSDs_1_72.png" /> GPC +45<br />\
    <img src="styles/legend/CSDs_1_73.png" /> GPC +50<br />\
    <img src="styles/legend/CSDs_1_74.png" /> GPC +55<br />\
    <img src="styles/legend/CSDs_1_75.png" /> GPC +60<br />\
    <img src="styles/legend/CSDs_1_76.png" /> GPC +65<br />\
    <img src="styles/legend/CSDs_1_77.png" /> GPC +70<br />\
    <img src="styles/legend/CSDs_1_78.png" /> GPC +75<br />\
    <img src="styles/legend/CSDs_1_79.png" /> GPC +80<br />\
    <img src="styles/legend/CSDs_1_80.png" /> GPC +85<br />\
    <img src="styles/legend/CSDs_1_81.png" /> GPC +90<br />\
    <img src="styles/legend/CSDs_1_82.png" /> GPC +95<br />\
    <img src="styles/legend/CSDs_1_83.png" /> GPC +100<br />\
    <img src="styles/legend/CSDs_1_84.png" /> PPC +1<br />\
    <img src="styles/legend/CSDs_1_85.png" /> PPC +5<br />\
    <img src="styles/legend/CSDs_1_86.png" /> PPC +10<br />\
    <img src="styles/legend/CSDs_1_87.png" /> PPC +15<br />\
    <img src="styles/legend/CSDs_1_88.png" /> PPC +20<br />\
    <img src="styles/legend/CSDs_1_89.png" /> PPC +25<br />\
    <img src="styles/legend/CSDs_1_90.png" /> PPC +30<br />\
    <img src="styles/legend/CSDs_1_91.png" /> PPC +35<br />\
    <img src="styles/legend/CSDs_1_92.png" /> PPC +40<br />\
    <img src="styles/legend/CSDs_1_93.png" /> PPC +45<br />\
    <img src="styles/legend/CSDs_1_94.png" /> PPC +50<br />\
    <img src="styles/legend/CSDs_1_95.png" /> PPC +55<br />\
    <img src="styles/legend/CSDs_1_96.png" /> PPC +60<br />\
    <img src="styles/legend/CSDs_1_97.png" /> PPC +65<br />\
    <img src="styles/legend/CSDs_1_98.png" /> PPC +70<br />\
    <img src="styles/legend/CSDs_1_99.png" /> PPC +75<br />\
    <img src="styles/legend/CSDs_1_100.png" /> PPC +80<br />\
    <img src="styles/legend/CSDs_1_101.png" /> PPC +85<br />\
    <img src="styles/legend/CSDs_1_102.png" /> PPC +90<br />\
    <img src="styles/legend/CSDs_1_103.png" /> PPC +95<br />\
    <img src="styles/legend/CSDs_1_104.png" /> PPC +100<br />\
    <img src="styles/legend/CSDs_1_105.png" /> IND +1<br />\
    <img src="styles/legend/CSDs_1_106.png" /> IND +5<br />\
    <img src="styles/legend/CSDs_1_107.png" /> IND +10<br />\
    <img src="styles/legend/CSDs_1_108.png" /> IND +15<br />\
    <img src="styles/legend/CSDs_1_109.png" /> IND +20<br />\
    <img src="styles/legend/CSDs_1_110.png" /> IND +25<br />\
    <img src="styles/legend/CSDs_1_111.png" /> IND +30<br />\
    <img src="styles/legend/CSDs_1_112.png" /> IND +35<br />\
    <img src="styles/legend/CSDs_1_113.png" /> IND +40<br />\
    <img src="styles/legend/CSDs_1_114.png" /> IND +45<br />\
    <img src="styles/legend/CSDs_1_115.png" /> IND +50<br />\
    <img src="styles/legend/CSDs_1_116.png" /> IND +55<br />\
    <img src="styles/legend/CSDs_1_117.png" /> IND +60<br />\
    <img src="styles/legend/CSDs_1_118.png" /> IND +65<br />\
    <img src="styles/legend/CSDs_1_119.png" /> IND +70<br />\
    <img src="styles/legend/CSDs_1_120.png" /> IND +75<br />\
    <img src="styles/legend/CSDs_1_121.png" /> IND +80<br />\
    <img src="styles/legend/CSDs_1_122.png" /> IND +85<br />\
    <img src="styles/legend/CSDs_1_123.png" /> IND +90<br />\
    <img src="styles/legend/CSDs_1_124.png" /> IND +95<br />\
    <img src="styles/legend/CSDs_1_125.png" /> IND +100<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_CSDs_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CSDs_1];
lyr_CSDs_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CPC': 'CPC', 'NDP': 'NDP', 'LPC': 'LPC', 'PPC': 'PPC', 'MP': 'MP', 'GPC': 'GPC', 'IND': 'IND', });
lyr_CSDs_1.set('fieldImages', {'Name': '', 'Difference': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'LPC': 'TextEdit', 'PPC': 'TextEdit', 'MP': '', 'GPC': 'TextEdit', 'IND': 'TextEdit', });
lyr_CSDs_1.set('fieldLabels', {'Name': 'header label - visible with data', 'Difference': 'inline label - always visible', 'CPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'LPC': 'inline label - always visible', 'PPC': 'inline label - always visible', 'MP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'IND': 'inline label - always visible', });
lyr_CSDs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});