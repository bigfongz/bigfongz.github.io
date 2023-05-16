var wms_layers = [];


        var lyr_openstreetmap_0 = new ol.layer.Tile({
            'title': 'openstreetmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PopulationDensity_1 = new ol.format.GeoJSON();
var features_PopulationDensity_1 = format_PopulationDensity_1.readFeatures(json_PopulationDensity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationDensity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationDensity_1.addFeatures(features_PopulationDensity_1);
var lyr_PopulationDensity_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationDensity_1, 
                style: style_PopulationDensity_1,
                interactive: true,
    title: 'Population Density<br />\
    <img src="styles/legend/PopulationDensity_1_0.png" /> 0 - 0.1<br />\
    <img src="styles/legend/PopulationDensity_1_1.png" /> 0.1 - 0.2<br />\
    <img src="styles/legend/PopulationDensity_1_2.png" /> 0.2 - 0.4<br />\
    <img src="styles/legend/PopulationDensity_1_3.png" /> 0.4 - 0.9<br />\
    <img src="styles/legend/PopulationDensity_1_4.png" /> 0.9 - 1.16<br />\
    <img src="styles/legend/PopulationDensity_1_5.png" /> 1.16 - 1.7<br />\
    <img src="styles/legend/PopulationDensity_1_6.png" /> 1.7 - 1.9<br />\
    <img src="styles/legend/PopulationDensity_1_7.png" /> 1.9 - 2.168<br />\
    <img src="styles/legend/PopulationDensity_1_8.png" /> 2.168 - 2.5<br />\
    <img src="styles/legend/PopulationDensity_1_9.png" /> 2.5 - 3.22<br />\
    <img src="styles/legend/PopulationDensity_1_10.png" /> 3.22 - 3.6<br />\
    <img src="styles/legend/PopulationDensity_1_11.png" /> 3.6 - 4.3<br />\
    <img src="styles/legend/PopulationDensity_1_12.png" /> 4.3 - 4.798<br />\
    <img src="styles/legend/PopulationDensity_1_13.png" /> 4.798 - 5<br />\
    <img src="styles/legend/PopulationDensity_1_14.png" /> 5 - 5.29<br />\
    <img src="styles/legend/PopulationDensity_1_15.png" /> 5.29 - 5.372<br />\
    <img src="styles/legend/PopulationDensity_1_16.png" /> 5.372 - 6.674<br />\
    <img src="styles/legend/PopulationDensity_1_17.png" /> 6.674 - 7.196<br />\
    <img src="styles/legend/PopulationDensity_1_18.png" /> 7.196 - 8.148<br />\
    <img src="styles/legend/PopulationDensity_1_19.png" /> 8.148 - 8.76<br />\
    <img src="styles/legend/PopulationDensity_1_20.png" /> 8.76 - 10.298<br />\
    <img src="styles/legend/PopulationDensity_1_21.png" /> 10.298 - 11.672<br />\
    <img src="styles/legend/PopulationDensity_1_22.png" /> 11.672 - 13.49<br />\
    <img src="styles/legend/PopulationDensity_1_23.png" /> 13.49 - 15.016<br />\
    <img src="styles/legend/PopulationDensity_1_24.png" /> 15.016 - 15.75<br />\
    <img src="styles/legend/PopulationDensity_1_25.png" /> 15.75 - 16.856<br />\
    <img src="styles/legend/PopulationDensity_1_26.png" /> 16.856 - 19.272<br />\
    <img src="styles/legend/PopulationDensity_1_27.png" /> 19.272 - 21.288<br />\
    <img src="styles/legend/PopulationDensity_1_28.png" /> 21.288 - 24.268<br />\
    <img src="styles/legend/PopulationDensity_1_29.png" /> 24.268 - 26.8<br />\
    <img src="styles/legend/PopulationDensity_1_30.png" /> 26.8 - 31.504<br />\
    <img src="styles/legend/PopulationDensity_1_31.png" /> 31.504 - 33.596<br />\
    <img src="styles/legend/PopulationDensity_1_32.png" /> 33.596 - 39.344<br />\
    <img src="styles/legend/PopulationDensity_1_33.png" /> 39.344 - 41.576<br />\
    <img src="styles/legend/PopulationDensity_1_34.png" /> 41.576 - 44.24<br />\
    <img src="styles/legend/PopulationDensity_1_35.png" /> 44.24 - 55.656<br />\
    <img src="styles/legend/PopulationDensity_1_36.png" /> 55.656 - 57.418<br />\
    <img src="styles/legend/PopulationDensity_1_37.png" /> 57.418 - 68.172<br />\
    <img src="styles/legend/PopulationDensity_1_38.png" /> 68.172 - 77.582<br />\
    <img src="styles/legend/PopulationDensity_1_39.png" /> 77.582 - 86.26<br />\
    <img src="styles/legend/PopulationDensity_1_40.png" /> 86.26 - 109.694<br />\
    <img src="styles/legend/PopulationDensity_1_41.png" /> 109.694 - 117.324<br />\
    <img src="styles/legend/PopulationDensity_1_42.png" /> 117.324 - 138.184<br />\
    <img src="styles/legend/PopulationDensity_1_43.png" /> 138.184 - 154.284<br />\
    <img src="styles/legend/PopulationDensity_1_44.png" /> 154.284 - 168.4<br />\
    <img src="styles/legend/PopulationDensity_1_45.png" /> 168.4 - 195.636<br />\
    <img src="styles/legend/PopulationDensity_1_46.png" /> 195.636 - 251.408<br />\
    <img src="styles/legend/PopulationDensity_1_47.png" /> 251.408 - 308.112<br />\
    <img src="styles/legend/PopulationDensity_1_48.png" /> 308.112 - 346.658<br />\
    <img src="styles/legend/PopulationDensity_1_49.png" /> 346.658 - 356.9<br />\
    <img src="styles/legend/PopulationDensity_1_50.png" /> 356.9 - 394.13<br />\
    <img src="styles/legend/PopulationDensity_1_51.png" /> 394.13 - 476.4<br />\
    <img src="styles/legend/PopulationDensity_1_52.png" /> 476.4 - 514.014<br />\
    <img src="styles/legend/PopulationDensity_1_53.png" /> 514.014 - 625.064<br />\
    <img src="styles/legend/PopulationDensity_1_54.png" /> 625.064 - 699.75<br />\
    <img src="styles/legend/PopulationDensity_1_55.png" /> 699.75 - 817.568<br />\
    <img src="styles/legend/PopulationDensity_1_56.png" /> 817.568 - 893.828<br />\
    <img src="styles/legend/PopulationDensity_1_57.png" /> 893.828 - 914.756<br />\
    <img src="styles/legend/PopulationDensity_1_58.png" /> 914.756 - 952.218<br />\
    <img src="styles/legend/PopulationDensity_1_59.png" /> 952.218 - 1091.28<br />\
    <img src="styles/legend/PopulationDensity_1_60.png" /> 1091.28 - 1164.724<br />\
    <img src="styles/legend/PopulationDensity_1_61.png" /> 1164.724 - 1201.352<br />\
    <img src="styles/legend/PopulationDensity_1_62.png" /> 1201.352 - 1253.066<br />\
    <img src="styles/legend/PopulationDensity_1_63.png" /> 1253.066 - 1298.396<br />\
    <img src="styles/legend/PopulationDensity_1_64.png" /> 1298.396 - 1417.77<br />\
    <img src="styles/legend/PopulationDensity_1_65.png" /> 1417.77 - 1541.32<br />\
    <img src="styles/legend/PopulationDensity_1_66.png" /> 1541.32 - 1585.654<br />\
    <img src="styles/legend/PopulationDensity_1_67.png" /> 1585.654 - 1655.22<br />\
    <img src="styles/legend/PopulationDensity_1_68.png" /> 1655.22 - 1705.03<br />\
    <img src="styles/legend/PopulationDensity_1_69.png" /> 1705.03 - 1766.06<br />\
    <img src="styles/legend/PopulationDensity_1_70.png" /> 1766.06 - 1826.812<br />\
    <img src="styles/legend/PopulationDensity_1_71.png" /> 1826.812 - 1924.116<br />\
    <img src="styles/legend/PopulationDensity_1_72.png" /> 1924.116 - 2007.936<br />\
    <img src="styles/legend/PopulationDensity_1_73.png" /> 2007.936 - 2081.88<br />\
    <img src="styles/legend/PopulationDensity_1_74.png" /> 2081.88 - 2147.9<br />\
    <img src="styles/legend/PopulationDensity_1_75.png" /> 2147.9 - 2197.6<br />\
    <img src="styles/legend/PopulationDensity_1_76.png" /> 2197.6 - 2363.516<br />\
    <img src="styles/legend/PopulationDensity_1_77.png" /> 2363.516 - 2401.812<br />\
    <img src="styles/legend/PopulationDensity_1_78.png" /> 2401.812 - 2440.826<br />\
    <img src="styles/legend/PopulationDensity_1_79.png" /> 2440.826 - 2591.84<br />\
    <img src="styles/legend/PopulationDensity_1_80.png" /> 2591.84 - 2708.416<br />\
    <img src="styles/legend/PopulationDensity_1_81.png" /> 2708.416 - 2773.1<br />\
    <img src="styles/legend/PopulationDensity_1_82.png" /> 2773.1 - 2864.276<br />\
    <img src="styles/legend/PopulationDensity_1_83.png" /> 2864.276 - 3019.44<br />\
    <img src="styles/legend/PopulationDensity_1_84.png" /> 3019.44 - 3095.07<br />\
    <img src="styles/legend/PopulationDensity_1_85.png" /> 3095.07 - 3257.016<br />\
    <img src="styles/legend/PopulationDensity_1_86.png" /> 3257.016 - 3521.5<br />\
    <img src="styles/legend/PopulationDensity_1_87.png" /> 3521.5 - 3644.876<br />\
    <img src="styles/legend/PopulationDensity_1_88.png" /> 3644.876 - 3976.84<br />\
    <img src="styles/legend/PopulationDensity_1_89.png" /> 3976.84 - 4111.38<br />\
    <img src="styles/legend/PopulationDensity_1_90.png" /> 4111.38 - 4756.204<br />\
    <img src="styles/legend/PopulationDensity_1_91.png" /> 4756.204 - 4825.752<br />\
    <img src="styles/legend/PopulationDensity_1_92.png" /> 4825.752 - 5160.32<br />\
    <img src="styles/legend/PopulationDensity_1_93.png" /> 5160.32 - 5487.952<br />\
    <img src="styles/legend/PopulationDensity_1_94.png" /> 5487.952 - 5711.85<br />\
    <img src="styles/legend/PopulationDensity_1_95.png" /> 5711.85 - 6539.44<br />\
    <img src="styles/legend/PopulationDensity_1_96.png" /> 6539.44 - 7572.724<br />\
    <img src="styles/legend/PopulationDensity_1_97.png" /> 7572.724 - 8780.756<br />\
    <img src="styles/legend/PopulationDensity_1_98.png" /> 8780.756 - 10957.226<br />\
    <img src="styles/legend/PopulationDensity_1_99.png" /> 10957.226 - 20546.5<br />'
        });
var format_PercentageChange_2 = new ol.format.GeoJSON();
var features_PercentageChange_2 = format_PercentageChange_2.readFeatures(json_PercentageChange_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentageChange_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentageChange_2.addFeatures(features_PercentageChange_2);
var lyr_PercentageChange_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentageChange_2, 
                style: style_PercentageChange_2,
                interactive: true,
    title: 'Percentage Change<br />\
    <img src="styles/legend/PercentageChange_2_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_1.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_2.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_3.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_4.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_5.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_6.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_7.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_8.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PercentageChange_2_9.png" /> 0.0 - 0.0<br />'
        });
var format_2016Population_3 = new ol.format.GeoJSON();
var features_2016Population_3 = format_2016Population_3.readFeatures(json_2016Population_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016Population_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016Population_3.addFeatures(features_2016Population_3);
var lyr_2016Population_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016Population_3, 
                style: style_2016Population_3,
                interactive: true,
    title: '2016 Population<br />\
    <img src="styles/legend/2016Population_3_0.png" /> 27197 - 35984<br />\
    <img src="styles/legend/2016Population_3_1.png" /> 35984 - 41372<br />\
    <img src="styles/legend/2016Population_3_2.png" /> 41372 - 63594<br />\
    <img src="styles/legend/2016Population_3_3.png" /> 63594 - 70536<br />\
    <img src="styles/legend/2016Population_3_4.png" /> 70536 - 71928<br />\
    <img src="styles/legend/2016Population_3_5.png" /> 71928 - 73297<br />\
    <img src="styles/legend/2016Population_3_6.png" /> 73297 - 76383<br />\
    <img src="styles/legend/2016Population_3_7.png" /> 76383 - 79445<br />\
    <img src="styles/legend/2016Population_3_8.png" /> 79445 - 80003<br />\
    <img src="styles/legend/2016Population_3_9.png" /> 80003 - 81248<br />\
    <img src="styles/legend/2016Population_3_10.png" /> 81248 - 82309<br />\
    <img src="styles/legend/2016Population_3_11.png" /> 82309 - 82737<br />\
    <img src="styles/legend/2016Population_3_12.png" /> 82737 - 83302<br />\
    <img src="styles/legend/2016Population_3_13.png" /> 83302 - 84110<br />\
    <img src="styles/legend/2016Population_3_14.png" /> 84110 - 85924<br />\
    <img src="styles/legend/2016Population_3_15.png" /> 85924 - 86685<br />\
    <img src="styles/legend/2016Population_3_16.png" /> 86685 - 87740<br />\
    <img src="styles/legend/2016Population_3_17.png" /> 87740 - 88843<br />\
    <img src="styles/legend/2016Population_3_18.png" /> 88843 - 90573<br />\
    <img src="styles/legend/2016Population_3_19.png" /> 90573 - 92326<br />\
    <img src="styles/legend/2016Population_3_20.png" /> 92326 - 92714<br />\
    <img src="styles/legend/2016Population_3_21.png" /> 92714 - 93839<br />\
    <img src="styles/legend/2016Population_3_22.png" /> 93839 - 94584<br />\
    <img src="styles/legend/2016Population_3_23.png" /> 94584 - 94828<br />\
    <img src="styles/legend/2016Population_3_24.png" /> 94828 - 94897<br />\
    <img src="styles/legend/2016Population_3_25.png" /> 94897 - 95777<br />\
    <img src="styles/legend/2016Population_3_26.png" /> 95777 - 97232<br />\
    <img src="styles/legend/2016Population_3_27.png" /> 97232 - 98335<br />\
    <img src="styles/legend/2016Population_3_28.png" /> 98335 - 99282<br />\
    <img src="styles/legend/2016Population_3_29.png" /> 99282 - 99939<br />\
    <img src="styles/legend/2016Population_3_30.png" /> 99939 - 100412<br />\
    <img src="styles/legend/2016Population_3_31.png" /> 100412 - 100964<br />\
    <img src="styles/legend/2016Population_3_32.png" /> 100964 - 101652<br />\
    <img src="styles/legend/2016Population_3_33.png" /> 101652 - 101932<br />\
    <img src="styles/legend/2016Population_3_34.png" /> 101932 - 102282<br />\
    <img src="styles/legend/2016Population_3_35.png" /> 102282 - 102498<br />\
    <img src="styles/legend/2016Population_3_36.png" /> 102498 - 102930<br />\
    <img src="styles/legend/2016Population_3_37.png" /> 102930 - 103320<br />\
    <img src="styles/legend/2016Population_3_38.png" /> 103320 - 103394<br />\
    <img src="styles/legend/2016Population_3_39.png" /> 103394 - 103493<br />\
    <img src="styles/legend/2016Population_3_40.png" /> 103493 - 103775<br />\
    <img src="styles/legend/2016Population_3_41.png" /> 103775 - 104192<br />\
    <img src="styles/legend/2016Population_3_42.png" /> 104192 - 104875<br />\
    <img src="styles/legend/2016Population_3_43.png" /> 104875 - 105235<br />\
    <img src="styles/legend/2016Population_3_44.png" /> 105235 - 105335<br />\
    <img src="styles/legend/2016Population_3_45.png" /> 105335 - 105471<br />\
    <img src="styles/legend/2016Population_3_46.png" /> 105471 - 105892<br />\
    <img src="styles/legend/2016Population_3_47.png" /> 105892 - 106571<br />\
    <img src="styles/legend/2016Population_3_48.png" /> 106571 - 106886<br />\
    <img src="styles/legend/2016Population_3_49.png" /> 106886 - 107339<br />\
    <img src="styles/legend/2016Population_3_50.png" /> 107339 - 107757<br />\
    <img src="styles/legend/2016Population_3_51.png" /> 107757 - 107975<br />\
    <img src="styles/legend/2016Population_3_52.png" /> 107975 - 108212<br />\
    <img src="styles/legend/2016Population_3_53.png" /> 108212 - 108663<br />\
    <img src="styles/legend/2016Population_3_54.png" /> 108663 - 108836<br />\
    <img src="styles/legend/2016Population_3_55.png" /> 108836 - 109424<br />\
    <img src="styles/legend/2016Population_3_56.png" /> 109424 - 109780<br />\
    <img src="styles/legend/2016Population_3_57.png" /> 109780 - 109995<br />\
    <img src="styles/legend/2016Population_3_58.png" /> 109995 - 110183<br />\
    <img src="styles/legend/2016Population_3_59.png" /> 110183 - 110287<br />\
    <img src="styles/legend/2016Population_3_60.png" /> 110287 - 110754<br />\
    <img src="styles/legend/2016Population_3_61.png" /> 110754 - 111031<br />\
    <img src="styles/legend/2016Population_3_62.png" /> 111031 - 111190<br />\
    <img src="styles/legend/2016Population_3_63.png" /> 111190 - 111626<br />\
    <img src="styles/legend/2016Population_3_64.png" /> 111626 - 111837<br />\
    <img src="styles/legend/2016Population_3_65.png" /> 111837 - 112112<br />\
    <img src="styles/legend/2016Population_3_66.png" /> 112112 - 112402<br />\
    <img src="styles/legend/2016Population_3_67.png" /> 112402 - 112839<br />\
    <img src="styles/legend/2016Population_3_68.png" /> 112839 - 113163<br />\
    <img src="styles/legend/2016Population_3_69.png" /> 113163 - 113795<br />\
    <img src="styles/legend/2016Population_3_70.png" /> 113795 - 114292<br />\
    <img src="styles/legend/2016Population_3_71.png" /> 114292 - 114648<br />\
    <img src="styles/legend/2016Population_3_72.png" /> 114648 - 114998<br />\
    <img src="styles/legend/2016Population_3_73.png" /> 114998 - 115314<br />\
    <img src="styles/legend/2016Population_3_74.png" /> 115314 - 115485<br />\
    <img src="styles/legend/2016Population_3_75.png" /> 115485 - 115792<br />\
    <img src="styles/legend/2016Population_3_76.png" /> 115792 - 116800<br />\
    <img src="styles/legend/2016Population_3_77.png" /> 116800 - 117225<br />\
    <img src="styles/legend/2016Population_3_78.png" /> 117225 - 117402<br />\
    <img src="styles/legend/2016Population_3_79.png" /> 117402 - 117446<br />\
    <img src="styles/legend/2016Population_3_80.png" /> 117446 - 117748<br />\
    <img src="styles/legend/2016Population_3_81.png" /> 117748 - 118138<br />\
    <img src="styles/legend/2016Population_3_82.png" /> 118138 - 118348<br />\
    <img src="styles/legend/2016Population_3_83.png" /> 118348 - 119077<br />\
    <img src="styles/legend/2016Population_3_84.png" /> 119077 - 119243<br />\
    <img src="styles/legend/2016Population_3_85.png" /> 119243 - 119954<br />\
    <img src="styles/legend/2016Population_3_86.png" /> 119954 - 120835<br />\
    <img src="styles/legend/2016Population_3_87.png" /> 120835 - 121013<br />\
    <img src="styles/legend/2016Population_3_88.png" /> 121013 - 121306<br />\
    <img src="styles/legend/2016Population_3_89.png" /> 121306 - 121921<br />\
    <img src="styles/legend/2016Population_3_90.png" /> 121921 - 122509<br />\
    <img src="styles/legend/2016Population_3_91.png" /> 122509 - 123224<br />\
    <img src="styles/legend/2016Population_3_92.png" /> 123224 - 124551<br />\
    <img src="styles/legend/2016Population_3_93.png" /> 124551 - 125591<br />\
    <img src="styles/legend/2016Population_3_94.png" /> 125591 - 127795<br />\
    <img src="styles/legend/2016Population_3_95.png" /> 127795 - 128833<br />\
    <img src="styles/legend/2016Population_3_96.png" /> 128833 - 129979<br />\
    <img src="styles/legend/2016Population_3_97.png" /> 129979 - 131796<br />\
    <img src="styles/legend/2016Population_3_98.png" /> 131796 - 135747<br />\
    <img src="styles/legend/2016Population_3_99.png" /> 135747 - 158749<br />'
        });
var format_2021Population_4 = new ol.format.GeoJSON();
var features_2021Population_4 = format_2021Population_4.readFeatures(json_2021Population_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021Population_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021Population_4.addFeatures(features_2021Population_4);
var lyr_2021Population_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021Population_4, 
                style: style_2021Population_4,
                interactive: true,
    title: '2021 Population<br />\
    <img src="styles/legend/2021Population_4_0.png" /> 26655 - 39233<br />\
    <img src="styles/legend/2021Population_4_1.png" /> 39233 - 41003<br />\
    <img src="styles/legend/2021Population_4_2.png" /> 41003 - 65599<br />\
    <img src="styles/legend/2021Population_4_3.png" /> 65599 - 70108<br />\
    <img src="styles/legend/2021Population_4_4.png" /> 70108 - 71268<br />\
    <img src="styles/legend/2021Population_4_5.png" /> 71268 - 72250<br />\
    <img src="styles/legend/2021Population_4_6.png" /> 72250 - 76294<br />\
    <img src="styles/legend/2021Population_4_7.png" /> 76294 - 79997<br />\
    <img src="styles/legend/2021Population_4_8.png" /> 79997 - 80793<br />\
    <img src="styles/legend/2021Population_4_9.png" /> 80793 - 81647<br />\
    <img src="styles/legend/2021Population_4_10.png" /> 81647 - 82415<br />\
    <img src="styles/legend/2021Population_4_11.png" /> 82415 - 83649<br />\
    <img src="styles/legend/2021Population_4_12.png" /> 83649 - 87158<br />\
    <img src="styles/legend/2021Population_4_13.png" /> 87158 - 87607<br />\
    <img src="styles/legend/2021Population_4_14.png" /> 87607 - 88507<br />\
    <img src="styles/legend/2021Population_4_15.png" /> 88507 - 89087<br />\
    <img src="styles/legend/2021Population_4_16.png" /> 89087 - 89659<br />\
    <img src="styles/legend/2021Population_4_17.png" /> 89659 - 90165<br />\
    <img src="styles/legend/2021Population_4_18.png" /> 90165 - 94169<br />\
    <img src="styles/legend/2021Population_4_19.png" /> 94169 - 94965<br />\
    <img src="styles/legend/2021Population_4_20.png" /> 94965 - 95668<br />\
    <img src="styles/legend/2021Population_4_21.png" /> 95668 - 96473<br />\
    <img src="styles/legend/2021Population_4_22.png" /> 96473 - 98080<br />\
    <img src="styles/legend/2021Population_4_23.png" /> 98080 - 100421<br />\
    <img src="styles/legend/2021Population_4_24.png" /> 100421 - 101219<br />\
    <img src="styles/legend/2021Population_4_25.png" /> 101219 - 101373<br />\
    <img src="styles/legend/2021Population_4_26.png" /> 101373 - 101804<br />\
    <img src="styles/legend/2021Population_4_27.png" /> 101804 - 102178<br />\
    <img src="styles/legend/2021Population_4_28.png" /> 102178 - 102552<br />\
    <img src="styles/legend/2021Population_4_29.png" /> 102552 - 103712<br />\
    <img src="styles/legend/2021Population_4_30.png" /> 103712 - 104441<br />\
    <img src="styles/legend/2021Population_4_31.png" /> 104441 - 104572<br />\
    <img src="styles/legend/2021Population_4_32.png" /> 104572 - 105091<br />\
    <img src="styles/legend/2021Population_4_33.png" /> 105091 - 105547<br />\
    <img src="styles/legend/2021Population_4_34.png" /> 105547 - 105951<br />\
    <img src="styles/legend/2021Population_4_35.png" /> 105951 - 106341<br />\
    <img src="styles/legend/2021Population_4_36.png" /> 106341 - 106874<br />\
    <img src="styles/legend/2021Population_4_37.png" /> 106874 - 107104<br />\
    <img src="styles/legend/2021Population_4_38.png" /> 107104 - 107412<br />\
    <img src="styles/legend/2021Population_4_39.png" /> 107412 - 107800<br />\
    <img src="styles/legend/2021Population_4_40.png" /> 107800 - 108044<br />\
    <img src="styles/legend/2021Population_4_41.png" /> 108044 - 108424<br />\
    <img src="styles/legend/2021Population_4_42.png" /> 108424 - 108728<br />\
    <img src="styles/legend/2021Population_4_43.png" /> 108728 - 109186<br />\
    <img src="styles/legend/2021Population_4_44.png" /> 109186 - 109419<br />\
    <img src="styles/legend/2021Population_4_45.png" /> 109419 - 109846<br />\
    <img src="styles/legend/2021Population_4_46.png" /> 109846 - 110384<br />\
    <img src="styles/legend/2021Population_4_47.png" /> 110384 - 110728<br />\
    <img src="styles/legend/2021Population_4_48.png" /> 110728 - 111063<br />\
    <img src="styles/legend/2021Population_4_49.png" /> 111063 - 111322<br />\
    <img src="styles/legend/2021Population_4_50.png" /> 111322 - 111738<br />\
    <img src="styles/legend/2021Population_4_51.png" /> 111738 - 111990<br />\
    <img src="styles/legend/2021Population_4_52.png" /> 111990 - 112121<br />\
    <img src="styles/legend/2021Population_4_53.png" /> 112121 - 112926<br />\
    <img src="styles/legend/2021Population_4_54.png" /> 112926 - 113395<br />\
    <img src="styles/legend/2021Population_4_55.png" /> 113395 - 113661<br />\
    <img src="styles/legend/2021Population_4_56.png" /> 113661 - 114090<br />\
    <img src="styles/legend/2021Population_4_57.png" /> 114090 - 114729<br />\
    <img src="styles/legend/2021Population_4_58.png" /> 114729 - 115087<br />\
    <img src="styles/legend/2021Population_4_59.png" /> 115087 - 115449<br />\
    <img src="styles/legend/2021Population_4_60.png" /> 115449 - 116004<br />\
    <img src="styles/legend/2021Population_4_61.png" /> 116004 - 116437<br />\
    <img src="styles/legend/2021Population_4_62.png" /> 116437 - 116756<br />\
    <img src="styles/legend/2021Population_4_63.png" /> 116756 - 116941<br />\
    <img src="styles/legend/2021Population_4_64.png" /> 116941 - 118110<br />\
    <img src="styles/legend/2021Population_4_65.png" /> 118110 - 118632<br />\
    <img src="styles/legend/2021Population_4_66.png" /> 118632 - 118797<br />\
    <img src="styles/legend/2021Population_4_67.png" /> 118797 - 119245<br />\
    <img src="styles/legend/2021Population_4_68.png" /> 119245 - 119553<br />\
    <img src="styles/legend/2021Population_4_69.png" /> 119553 - 119861<br />\
    <img src="styles/legend/2021Population_4_70.png" /> 119861 - 120099<br />\
    <img src="styles/legend/2021Population_4_71.png" /> 120099 - 120666<br />\
    <img src="styles/legend/2021Population_4_72.png" /> 120666 - 121073<br />\
    <img src="styles/legend/2021Population_4_73.png" /> 121073 - 122342<br />\
    <img src="styles/legend/2021Population_4_74.png" /> 122342 - 122808<br />\
    <img src="styles/legend/2021Population_4_75.png" /> 122808 - 123238<br />\
    <img src="styles/legend/2021Population_4_76.png" /> 123238 - 123617<br />\
    <img src="styles/legend/2021Population_4_77.png" /> 123617 - 124134<br />\
    <img src="styles/legend/2021Population_4_78.png" /> 124134 - 124810<br />\
    <img src="styles/legend/2021Population_4_79.png" /> 124810 - 125111<br />\
    <img src="styles/legend/2021Population_4_80.png" /> 125111 - 125281<br />\
    <img src="styles/legend/2021Population_4_81.png" /> 125281 - 125632<br />\
    <img src="styles/legend/2021Population_4_82.png" /> 125632 - 126321<br />\
    <img src="styles/legend/2021Population_4_83.png" /> 126321 - 126877<br />\
    <img src="styles/legend/2021Population_4_84.png" /> 126877 - 127249<br />\
    <img src="styles/legend/2021Population_4_85.png" /> 127249 - 128496<br />\
    <img src="styles/legend/2021Population_4_86.png" /> 128496 - 129786<br />\
    <img src="styles/legend/2021Population_4_87.png" /> 129786 - 130740<br />\
    <img src="styles/legend/2021Population_4_88.png" /> 130740 - 131365<br />\
    <img src="styles/legend/2021Population_4_89.png" /> 131365 - 131808<br />\
    <img src="styles/legend/2021Population_4_90.png" /> 131808 - 132767<br />\
    <img src="styles/legend/2021Population_4_91.png" /> 132767 - 134295<br />\
    <img src="styles/legend/2021Population_4_92.png" /> 134295 - 135308<br />\
    <img src="styles/legend/2021Population_4_93.png" /> 135308 - 136345<br />\
    <img src="styles/legend/2021Population_4_94.png" /> 136345 - 138427<br />\
    <img src="styles/legend/2021Population_4_95.png" /> 138427 - 140397<br />\
    <img src="styles/legend/2021Population_4_96.png" /> 140397 - 144723<br />\
    <img src="styles/legend/2021Population_4_97.png" /> 144723 - 149040<br />\
    <img src="styles/legend/2021Population_4_98.png" /> 149040 - 157773<br />\
    <img src="styles/legend/2021Population_4_99.png" /> 157773 - 209431<br />'
        });

lyr_openstreetmap_0.setVisible(true);lyr_PopulationDensity_1.setVisible(false);lyr_PercentageChange_2.setVisible(false);lyr_2016Population_3.setVisible(false);lyr_2021Population_4.setVisible(false);
var layersList = [lyr_openstreetmap_0,lyr_PopulationDensity_1,lyr_PercentageChange_2,lyr_2016Population_3,lyr_2021Population_4];
lyr_PopulationDensity_1.set('fieldAliases', {'FED_NUM': 'FED_NUM', 'Federal El': 'Federal El', '2021 Popul': '2021 Popul', '2016 Popul': '2016 Popul', '% Change 2': '% Change 2', 'Population': 'Population', 'Federal Electoral District': 'Federal Electoral District', '2021 Population': '2021 Population', '2016 Population': '2016 Population', '% Change 2016-2021': '% Change 2016-2021', 'Population Density Per km^2': 'Population Density Per km^2', });
lyr_PercentageChange_2.set('fieldAliases', {'FED_NUM': 'FED_NUM', 'Federal El': 'Federal El', '2021 Popul': '2021 Popul', '2016 Popul': '2016 Popul', '% Change 2': '% Change 2', 'Population': 'Population', 'Federal Electoral District': 'Federal Electoral District', '2021 Population': '2021 Population', '2016 Population': '2016 Population', '% Change 2016-2021': '% Change 2016-2021', 'Population Density Per km^2': 'Population Density Per km^2', });
lyr_2016Population_3.set('fieldAliases', {'FED_NUM': 'FED_NUM', 'Federal El': 'Federal El', '2021 Popul': '2021 Popul', '2016 Popul': '2016 Popul', '% Change 2': '% Change 2', 'Population': 'Population', 'Federal Electoral District': 'Federal Electoral District', '2021 Population': '2021 Population', '2016 Population': '2016 Population', '% Change 2016-2021': '% Change 2016-2021', 'Population Density Per km^2': 'Population Density Per km^2', });
lyr_2021Population_4.set('fieldAliases', {'FED_NUM': 'FED_NUM', 'Federal El': 'Federal El', '2021 Popul': '2021 Popul', '2016 Popul': '2016 Popul', '% Change 2': '% Change 2', 'Population': 'Population', 'Federal Electoral District': 'Federal Electoral District', '2021 Population': '2021 Population', '2016 Population': '2016 Population', '% Change 2016-2021': '% Change 2016-2021', 'Population Density Per km^2': 'Population Density Per km^2', });
lyr_PopulationDensity_1.set('fieldImages', {'FED_NUM': 'TextEdit', 'Federal El': 'TextEdit', '2021 Popul': 'TextEdit', '2016 Popul': 'TextEdit', '% Change 2': 'TextEdit', 'Population': 'TextEdit', 'Federal Electoral District': 'TextEdit', '2021 Population': 'TextEdit', '2016 Population': 'TextEdit', '% Change 2016-2021': 'TextEdit', 'Population Density Per km^2': 'TextEdit', });
lyr_PercentageChange_2.set('fieldImages', {'FED_NUM': 'TextEdit', 'Federal El': 'TextEdit', '2021 Popul': 'TextEdit', '2016 Popul': 'TextEdit', '% Change 2': 'TextEdit', 'Population': 'TextEdit', 'Federal Electoral District': 'TextEdit', '2021 Population': 'TextEdit', '2016 Population': 'TextEdit', '% Change 2016-2021': 'TextEdit', 'Population Density Per km^2': 'TextEdit', });
lyr_2016Population_3.set('fieldImages', {'FED_NUM': 'TextEdit', 'Federal El': 'TextEdit', '2021 Popul': 'TextEdit', '2016 Popul': 'TextEdit', '% Change 2': 'TextEdit', 'Population': 'TextEdit', 'Federal Electoral District': 'TextEdit', '2021 Population': 'TextEdit', '2016 Population': 'TextEdit', '% Change 2016-2021': 'TextEdit', 'Population Density Per km^2': 'TextEdit', });
lyr_2021Population_4.set('fieldImages', {'FED_NUM': 'TextEdit', 'Federal El': 'TextEdit', '2021 Popul': 'TextEdit', '2016 Popul': 'TextEdit', '% Change 2': 'TextEdit', 'Population': 'TextEdit', 'Federal Electoral District': 'TextEdit', '2021 Population': 'TextEdit', '2016 Population': 'TextEdit', '% Change 2016-2021': 'TextEdit', 'Population Density Per km^2': 'TextEdit', });
lyr_PopulationDensity_1.set('fieldLabels', {'FED_NUM': 'no label', 'Federal El': 'no label', '2021 Popul': 'no label', '2016 Popul': 'no label', '% Change 2': 'no label', 'Population': 'no label', 'Federal Electoral District': 'header label', '2021 Population': 'header label', '2016 Population': 'header label', '% Change 2016-2021': 'header label', 'Population Density Per km^2': 'header label', });
lyr_PercentageChange_2.set('fieldLabels', {'FED_NUM': 'no label', 'Federal El': 'no label', '2021 Popul': 'no label', '2016 Popul': 'no label', '% Change 2': 'no label', 'Population': 'no label', 'Federal Electoral District': 'header label', '2021 Population': 'header label', '2016 Population': 'header label', '% Change 2016-2021': 'header label', 'Population Density Per km^2': 'header label', });
lyr_2016Population_3.set('fieldLabels', {'FED_NUM': 'no label', 'Federal El': 'no label', '2021 Popul': 'no label', '2016 Popul': 'no label', '% Change 2': 'no label', 'Population': 'no label', 'Federal Electoral District': 'header label', '2021 Population': 'header label', '2016 Population': 'header label', '% Change 2016-2021': 'header label', 'Population Density Per km^2': 'header label', });
lyr_2021Population_4.set('fieldLabels', {'FED_NUM': 'no label', 'Federal El': 'no label', '2021 Popul': 'no label', '2016 Popul': 'no label', '% Change 2': 'no label', 'Population': 'no label', 'Federal Electoral District': 'header label', '2021 Population': 'header label', '2016 Population': 'header label', '% Change 2016-2021': 'header label', 'Population Density Per km^2': 'header label', });
lyr_2021Population_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});