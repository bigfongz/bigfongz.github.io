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
var format_PollingDivisions_1 = new ol.format.GeoJSON();
var features_PollingDivisions_1 = format_PollingDivisions_1.readFeatures(json_PollingDivisions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PollingDivisions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PollingDivisions_1.addFeatures(features_PollingDivisions_1);
var lyr_PollingDivisions_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PollingDivisions_1, 
                style: style_PollingDivisions_1,
                popuplayertitle: "Polling Divisions",
                interactive: true,
    title: 'Polling Divisions<br />\
    <img src="styles/legend/PollingDivisions_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/PollingDivisions_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/PollingDivisions_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/PollingDivisions_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/PollingDivisions_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/PollingDivisions_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/PollingDivisions_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/PollingDivisions_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/PollingDivisions_1_8.png" /> NDP +40<br />\
    <img src="styles/legend/PollingDivisions_1_9.png" /> NDP +45<br />\
    <img src="styles/legend/PollingDivisions_1_10.png" /> NDP +50<br />\
    <img src="styles/legend/PollingDivisions_1_11.png" /> NDP +55<br />\
    <img src="styles/legend/PollingDivisions_1_12.png" /> NDP +60<br />\
    <img src="styles/legend/PollingDivisions_1_13.png" /> NDP +65<br />\
    <img src="styles/legend/PollingDivisions_1_14.png" /> NDP +70<br />\
    <img src="styles/legend/PollingDivisions_1_15.png" /> NDP +75<br />\
    <img src="styles/legend/PollingDivisions_1_16.png" /> NDP +80<br />\
    <img src="styles/legend/PollingDivisions_1_17.png" /> NDP +85<br />\
    <img src="styles/legend/PollingDivisions_1_18.png" /> NDP +90<br />\
    <img src="styles/legend/PollingDivisions_1_19.png" /> NDP +95<br />\
    <img src="styles/legend/PollingDivisions_1_20.png" /> NDP +100<br />\
    <img src="styles/legend/PollingDivisions_1_21.png" /> CPC +1<br />\
    <img src="styles/legend/PollingDivisions_1_22.png" /> CPC +5<br />\
    <img src="styles/legend/PollingDivisions_1_23.png" /> CPC +10<br />\
    <img src="styles/legend/PollingDivisions_1_24.png" /> CPC +15<br />\
    <img src="styles/legend/PollingDivisions_1_25.png" /> CPC +20<br />\
    <img src="styles/legend/PollingDivisions_1_26.png" /> CPC +25<br />\
    <img src="styles/legend/PollingDivisions_1_27.png" /> CPC +30<br />\
    <img src="styles/legend/PollingDivisions_1_28.png" /> CPC +35<br />\
    <img src="styles/legend/PollingDivisions_1_29.png" /> CPC +40<br />\
    <img src="styles/legend/PollingDivisions_1_30.png" /> CPC +45<br />\
    <img src="styles/legend/PollingDivisions_1_31.png" /> CPC +50<br />\
    <img src="styles/legend/PollingDivisions_1_32.png" /> CPC +55<br />\
    <img src="styles/legend/PollingDivisions_1_33.png" /> CPC +60<br />\
    <img src="styles/legend/PollingDivisions_1_34.png" /> CPC +65<br />\
    <img src="styles/legend/PollingDivisions_1_35.png" /> CPC +70<br />\
    <img src="styles/legend/PollingDivisions_1_36.png" /> CPC +75<br />\
    <img src="styles/legend/PollingDivisions_1_37.png" /> CPC +80<br />\
    <img src="styles/legend/PollingDivisions_1_38.png" /> CPC +85<br />\
    <img src="styles/legend/PollingDivisions_1_39.png" /> CPC +90<br />\
    <img src="styles/legend/PollingDivisions_1_40.png" /> CPC +95<br />\
    <img src="styles/legend/PollingDivisions_1_41.png" /> CPC +100<br />\
    <img src="styles/legend/PollingDivisions_1_42.png" /> LPC +1<br />\
    <img src="styles/legend/PollingDivisions_1_43.png" /> LPC +5<br />\
    <img src="styles/legend/PollingDivisions_1_44.png" /> LPC +10<br />\
    <img src="styles/legend/PollingDivisions_1_45.png" /> LPC +15<br />\
    <img src="styles/legend/PollingDivisions_1_46.png" /> LPC +20<br />\
    <img src="styles/legend/PollingDivisions_1_47.png" /> LPC +25<br />\
    <img src="styles/legend/PollingDivisions_1_48.png" /> LPC +30<br />\
    <img src="styles/legend/PollingDivisions_1_49.png" /> LPC +35<br />\
    <img src="styles/legend/PollingDivisions_1_50.png" /> LPC +40<br />\
    <img src="styles/legend/PollingDivisions_1_51.png" /> LPC +45<br />\
    <img src="styles/legend/PollingDivisions_1_52.png" /> LPC +50<br />\
    <img src="styles/legend/PollingDivisions_1_53.png" /> LPC +55<br />\
    <img src="styles/legend/PollingDivisions_1_54.png" /> LPC +60<br />\
    <img src="styles/legend/PollingDivisions_1_55.png" /> LPC +65<br />\
    <img src="styles/legend/PollingDivisions_1_56.png" /> LPC +70<br />\
    <img src="styles/legend/PollingDivisions_1_57.png" /> LPC +75<br />\
    <img src="styles/legend/PollingDivisions_1_58.png" /> LPC +80<br />\
    <img src="styles/legend/PollingDivisions_1_59.png" /> LPC +85<br />\
    <img src="styles/legend/PollingDivisions_1_60.png" /> LPC +90<br />\
    <img src="styles/legend/PollingDivisions_1_61.png" /> LPC +95<br />\
    <img src="styles/legend/PollingDivisions_1_62.png" /> LPC +100<br />\
    <img src="styles/legend/PollingDivisions_1_63.png" /> GPC +1<br />\
    <img src="styles/legend/PollingDivisions_1_64.png" /> GPC +5<br />\
    <img src="styles/legend/PollingDivisions_1_65.png" /> GPC +10<br />\
    <img src="styles/legend/PollingDivisions_1_66.png" /> GPC +15<br />\
    <img src="styles/legend/PollingDivisions_1_67.png" /> GPC +20<br />\
    <img src="styles/legend/PollingDivisions_1_68.png" /> GPC +25<br />\
    <img src="styles/legend/PollingDivisions_1_69.png" /> GPC +30<br />\
    <img src="styles/legend/PollingDivisions_1_70.png" /> GPC +35<br />\
    <img src="styles/legend/PollingDivisions_1_71.png" /> GPC +40<br />\
    <img src="styles/legend/PollingDivisions_1_72.png" /> GPC +45<br />\
    <img src="styles/legend/PollingDivisions_1_73.png" /> GPC +50<br />\
    <img src="styles/legend/PollingDivisions_1_74.png" /> GPC +55<br />\
    <img src="styles/legend/PollingDivisions_1_75.png" /> GPC +60<br />\
    <img src="styles/legend/PollingDivisions_1_76.png" /> GPC +65<br />\
    <img src="styles/legend/PollingDivisions_1_77.png" /> GPC +70<br />\
    <img src="styles/legend/PollingDivisions_1_78.png" /> GPC +75<br />\
    <img src="styles/legend/PollingDivisions_1_79.png" /> GPC +80<br />\
    <img src="styles/legend/PollingDivisions_1_80.png" /> GPC +85<br />\
    <img src="styles/legend/PollingDivisions_1_81.png" /> GPC +90<br />\
    <img src="styles/legend/PollingDivisions_1_82.png" /> GPC +95<br />\
    <img src="styles/legend/PollingDivisions_1_83.png" /> GPC +100<br />\
    <img src="styles/legend/PollingDivisions_1_84.png" /> OTH +1<br />\
    <img src="styles/legend/PollingDivisions_1_85.png" /> OTH +5<br />\
    <img src="styles/legend/PollingDivisions_1_86.png" /> OTH +10<br />\
    <img src="styles/legend/PollingDivisions_1_87.png" /> OTH +15<br />\
    <img src="styles/legend/PollingDivisions_1_88.png" /> OTH +20<br />\
    <img src="styles/legend/PollingDivisions_1_89.png" /> OTH +25<br />\
    <img src="styles/legend/PollingDivisions_1_90.png" /> OTH +30<br />\
    <img src="styles/legend/PollingDivisions_1_91.png" /> OTH +35<br />\
    <img src="styles/legend/PollingDivisions_1_92.png" /> OTH +40<br />\
    <img src="styles/legend/PollingDivisions_1_93.png" /> OTH +40<br />\
    <img src="styles/legend/PollingDivisions_1_94.png" /> OTH +50<br />\
    <img src="styles/legend/PollingDivisions_1_95.png" /> OTH +55<br />\
    <img src="styles/legend/PollingDivisions_1_96.png" /> OTH +60<br />\
    <img src="styles/legend/PollingDivisions_1_97.png" /> OTH +65<br />\
    <img src="styles/legend/PollingDivisions_1_98.png" /> OTH +70<br />\
    <img src="styles/legend/PollingDivisions_1_99.png" /> OTH +75<br />\
    <img src="styles/legend/PollingDivisions_1_100.png" /> OTH +80<br />\
    <img src="styles/legend/PollingDivisions_1_101.png" /> OTH +85<br />\
    <img src="styles/legend/PollingDivisions_1_102.png" /> OTH +90<br />\
    <img src="styles/legend/PollingDivisions_1_103.png" /> OTH +95<br />\
    <img src="styles/legend/PollingDivisions_1_104.png" /> OTH +100<br />'
        });
var format_PollingDivisions_2 = new ol.format.GeoJSON();
var features_PollingDivisions_2 = format_PollingDivisions_2.readFeatures(json_PollingDivisions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PollingDivisions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PollingDivisions_2.addFeatures(features_PollingDivisions_2);
var lyr_PollingDivisions_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PollingDivisions_2, 
                style: style_PollingDivisions_2,
                popuplayertitle: "Polling Divisions",
                interactive: true,
    title: 'Polling Divisions<br />\
    <img src="styles/legend/PollingDivisions_2_0.png" /> NDP +1<br />\
    <img src="styles/legend/PollingDivisions_2_1.png" /> NDP +5<br />\
    <img src="styles/legend/PollingDivisions_2_2.png" /> NDP +10<br />\
    <img src="styles/legend/PollingDivisions_2_3.png" /> NDP +15<br />\
    <img src="styles/legend/PollingDivisions_2_4.png" /> NDP +20<br />\
    <img src="styles/legend/PollingDivisions_2_5.png" /> NDP +25<br />\
    <img src="styles/legend/PollingDivisions_2_6.png" /> NDP +30<br />\
    <img src="styles/legend/PollingDivisions_2_7.png" /> NDP +35<br />\
    <img src="styles/legend/PollingDivisions_2_8.png" /> NDP +40<br />\
    <img src="styles/legend/PollingDivisions_2_9.png" /> NDP +45<br />\
    <img src="styles/legend/PollingDivisions_2_10.png" /> NDP +50<br />\
    <img src="styles/legend/PollingDivisions_2_11.png" /> NDP +55<br />\
    <img src="styles/legend/PollingDivisions_2_12.png" /> NDP +60<br />\
    <img src="styles/legend/PollingDivisions_2_13.png" /> NDP +65<br />\
    <img src="styles/legend/PollingDivisions_2_14.png" /> NDP +70<br />\
    <img src="styles/legend/PollingDivisions_2_15.png" /> NDP +75<br />\
    <img src="styles/legend/PollingDivisions_2_16.png" /> NDP +80<br />\
    <img src="styles/legend/PollingDivisions_2_17.png" /> NDP +85<br />\
    <img src="styles/legend/PollingDivisions_2_18.png" /> NDP +90<br />\
    <img src="styles/legend/PollingDivisions_2_19.png" /> NDP +95<br />\
    <img src="styles/legend/PollingDivisions_2_20.png" /> NDP +100<br />\
    <img src="styles/legend/PollingDivisions_2_21.png" /> CPC +1<br />\
    <img src="styles/legend/PollingDivisions_2_22.png" /> CPC +5<br />\
    <img src="styles/legend/PollingDivisions_2_23.png" /> CPC +10<br />\
    <img src="styles/legend/PollingDivisions_2_24.png" /> CPC +15<br />\
    <img src="styles/legend/PollingDivisions_2_25.png" /> CPC +20<br />\
    <img src="styles/legend/PollingDivisions_2_26.png" /> CPC +25<br />\
    <img src="styles/legend/PollingDivisions_2_27.png" /> CPC +30<br />\
    <img src="styles/legend/PollingDivisions_2_28.png" /> CPC +35<br />\
    <img src="styles/legend/PollingDivisions_2_29.png" /> CPC +40<br />\
    <img src="styles/legend/PollingDivisions_2_30.png" /> CPC +45<br />\
    <img src="styles/legend/PollingDivisions_2_31.png" /> CPC +50<br />\
    <img src="styles/legend/PollingDivisions_2_32.png" /> CPC +55<br />\
    <img src="styles/legend/PollingDivisions_2_33.png" /> CPC +60<br />\
    <img src="styles/legend/PollingDivisions_2_34.png" /> CPC +65<br />\
    <img src="styles/legend/PollingDivisions_2_35.png" /> CPC +70<br />\
    <img src="styles/legend/PollingDivisions_2_36.png" /> CPC +75<br />\
    <img src="styles/legend/PollingDivisions_2_37.png" /> CPC +80<br />\
    <img src="styles/legend/PollingDivisions_2_38.png" /> CPC +85<br />\
    <img src="styles/legend/PollingDivisions_2_39.png" /> CPC +90<br />\
    <img src="styles/legend/PollingDivisions_2_40.png" /> CPC +95<br />\
    <img src="styles/legend/PollingDivisions_2_41.png" /> CPC +100<br />\
    <img src="styles/legend/PollingDivisions_2_42.png" /> LPC +1<br />\
    <img src="styles/legend/PollingDivisions_2_43.png" /> LPC +5<br />\
    <img src="styles/legend/PollingDivisions_2_44.png" /> LPC +10<br />\
    <img src="styles/legend/PollingDivisions_2_45.png" /> LPC +15<br />\
    <img src="styles/legend/PollingDivisions_2_46.png" /> LPC +20<br />\
    <img src="styles/legend/PollingDivisions_2_47.png" /> LPC +25<br />\
    <img src="styles/legend/PollingDivisions_2_48.png" /> LPC +30<br />\
    <img src="styles/legend/PollingDivisions_2_49.png" /> LPC +35<br />\
    <img src="styles/legend/PollingDivisions_2_50.png" /> LPC +40<br />\
    <img src="styles/legend/PollingDivisions_2_51.png" /> LPC +45<br />\
    <img src="styles/legend/PollingDivisions_2_52.png" /> LPC +50<br />\
    <img src="styles/legend/PollingDivisions_2_53.png" /> LPC +55<br />\
    <img src="styles/legend/PollingDivisions_2_54.png" /> LPC +60<br />\
    <img src="styles/legend/PollingDivisions_2_55.png" /> LPC +65<br />\
    <img src="styles/legend/PollingDivisions_2_56.png" /> LPC +70<br />\
    <img src="styles/legend/PollingDivisions_2_57.png" /> LPC +75<br />\
    <img src="styles/legend/PollingDivisions_2_58.png" /> LPC +80<br />\
    <img src="styles/legend/PollingDivisions_2_59.png" /> LPC +85<br />\
    <img src="styles/legend/PollingDivisions_2_60.png" /> LPC +90<br />\
    <img src="styles/legend/PollingDivisions_2_61.png" /> LPC +95<br />\
    <img src="styles/legend/PollingDivisions_2_62.png" /> LPC +100<br />\
    <img src="styles/legend/PollingDivisions_2_63.png" /> GPC +1<br />\
    <img src="styles/legend/PollingDivisions_2_64.png" /> GPC +5<br />\
    <img src="styles/legend/PollingDivisions_2_65.png" /> GPC +10<br />\
    <img src="styles/legend/PollingDivisions_2_66.png" /> GPC +15<br />\
    <img src="styles/legend/PollingDivisions_2_67.png" /> GPC +20<br />\
    <img src="styles/legend/PollingDivisions_2_68.png" /> GPC +25<br />\
    <img src="styles/legend/PollingDivisions_2_69.png" /> GPC +30<br />\
    <img src="styles/legend/PollingDivisions_2_70.png" /> GPC +35<br />\
    <img src="styles/legend/PollingDivisions_2_71.png" /> GPC +40<br />\
    <img src="styles/legend/PollingDivisions_2_72.png" /> GPC +45<br />\
    <img src="styles/legend/PollingDivisions_2_73.png" /> GPC +50<br />\
    <img src="styles/legend/PollingDivisions_2_74.png" /> GPC +55<br />\
    <img src="styles/legend/PollingDivisions_2_75.png" /> GPC +60<br />\
    <img src="styles/legend/PollingDivisions_2_76.png" /> GPC +65<br />\
    <img src="styles/legend/PollingDivisions_2_77.png" /> GPC +70<br />\
    <img src="styles/legend/PollingDivisions_2_78.png" /> GPC +75<br />\
    <img src="styles/legend/PollingDivisions_2_79.png" /> GPC +80<br />\
    <img src="styles/legend/PollingDivisions_2_80.png" /> GPC +85<br />\
    <img src="styles/legend/PollingDivisions_2_81.png" /> GPC +90<br />\
    <img src="styles/legend/PollingDivisions_2_82.png" /> GPC +95<br />\
    <img src="styles/legend/PollingDivisions_2_83.png" /> GPC +100<br />\
    <img src="styles/legend/PollingDivisions_2_84.png" /> OTH +1<br />\
    <img src="styles/legend/PollingDivisions_2_85.png" /> OTH +5<br />\
    <img src="styles/legend/PollingDivisions_2_86.png" /> OTH +10<br />\
    <img src="styles/legend/PollingDivisions_2_87.png" /> OTH +15<br />\
    <img src="styles/legend/PollingDivisions_2_88.png" /> OTH +20<br />\
    <img src="styles/legend/PollingDivisions_2_89.png" /> OTH +25<br />\
    <img src="styles/legend/PollingDivisions_2_90.png" /> OTH +30<br />\
    <img src="styles/legend/PollingDivisions_2_91.png" /> OTH +35<br />\
    <img src="styles/legend/PollingDivisions_2_92.png" /> OTH +40<br />\
    <img src="styles/legend/PollingDivisions_2_93.png" /> OTH +40<br />\
    <img src="styles/legend/PollingDivisions_2_94.png" /> OTH +50<br />\
    <img src="styles/legend/PollingDivisions_2_95.png" /> OTH +55<br />\
    <img src="styles/legend/PollingDivisions_2_96.png" /> OTH +60<br />\
    <img src="styles/legend/PollingDivisions_2_97.png" /> OTH +65<br />\
    <img src="styles/legend/PollingDivisions_2_98.png" /> OTH +70<br />\
    <img src="styles/legend/PollingDivisions_2_99.png" /> OTH +75<br />\
    <img src="styles/legend/PollingDivisions_2_100.png" /> OTH +80<br />\
    <img src="styles/legend/PollingDivisions_2_101.png" /> OTH +85<br />\
    <img src="styles/legend/PollingDivisions_2_102.png" /> OTH +90<br />\
    <img src="styles/legend/PollingDivisions_2_103.png" /> OTH +95<br />\
    <img src="styles/legend/PollingDivisions_2_104.png" /> OTH +100<br />'
        });
var format_CensusSubdivisions_3 = new ol.format.GeoJSON();
var features_CensusSubdivisions_3 = format_CensusSubdivisions_3.readFeatures(json_CensusSubdivisions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CensusSubdivisions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CensusSubdivisions_3.addFeatures(features_CensusSubdivisions_3);
var lyr_CensusSubdivisions_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CensusSubdivisions_3, 
                style: style_CensusSubdivisions_3,
                popuplayertitle: "Census Subdivisions",
                interactive: true,
                title: '<img src="styles/legend/CensusSubdivisions_3.png" /> Census Subdivisions'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PollingDivisions_1.setVisible(true);lyr_PollingDivisions_2.setVisible(true);lyr_CensusSubdivisions_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PollingDivisions_1,lyr_PollingDivisions_2,lyr_CensusSubdivisions_3];
lyr_PollingDivisions_1.set('fieldAliases', {'LPC': 'LPC', 'CPC': 'CPC', 'NDP': 'NDP', 'GPC': 'GPC', 'OTH': 'OTH', 'Difference': 'Difference', });
lyr_PollingDivisions_2.set('fieldAliases', {'LPC': 'LPC', 'CPC': 'CPC', 'NDP': 'NDP', 'GPC': 'GPC', 'OTH': 'OTH', 'Difference': 'Difference', });
lyr_CensusSubdivisions_3.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', });
lyr_PollingDivisions_1.set('fieldImages', {'LPC': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', 'Difference': 'TextEdit', });
lyr_PollingDivisions_2.set('fieldImages', {'LPC': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'GPC': 'TextEdit', 'OTH': 'TextEdit', 'Difference': 'TextEdit', });
lyr_CensusSubdivisions_3.set('fieldImages', {'Name': 'TextEdit', 'Type': 'TextEdit', });
lyr_PollingDivisions_1.set('fieldLabels', {'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', 'Difference': 'inline label - always visible', });
lyr_PollingDivisions_2.set('fieldLabels', {'LPC': 'inline label - always visible', 'CPC': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPC': 'inline label - always visible', 'OTH': 'inline label - always visible', 'Difference': 'inline label - always visible', });
lyr_CensusSubdivisions_3.set('fieldLabels', {'Name': 'header label - always visible', 'Type': 'inline label - always visible', });
lyr_CensusSubdivisions_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});