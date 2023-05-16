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
var format_2021Population_1 = new ol.format.GeoJSON();
var features_2021Population_1 = format_2021Population_1.readFeatures(json_2021Population_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021Population_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021Population_1.addFeatures(features_2021Population_1);
var lyr_2021Population_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021Population_1, 
                style: style_2021Population_1,
                interactive: true,
    title: '2021 Population<br />\
    <img src="styles/legend/2021Population_1_0.png" /> 26655 - 39233<br />\
    <img src="styles/legend/2021Population_1_1.png" /> 39233 - 41003<br />\
    <img src="styles/legend/2021Population_1_2.png" /> 41003 - 65599<br />\
    <img src="styles/legend/2021Population_1_3.png" /> 65599 - 70108<br />\
    <img src="styles/legend/2021Population_1_4.png" /> 70108 - 71268<br />\
    <img src="styles/legend/2021Population_1_5.png" /> 71268 - 72250<br />\
    <img src="styles/legend/2021Population_1_6.png" /> 72250 - 76294<br />\
    <img src="styles/legend/2021Population_1_7.png" /> 76294 - 79997<br />\
    <img src="styles/legend/2021Population_1_8.png" /> 79997 - 80793<br />\
    <img src="styles/legend/2021Population_1_9.png" /> 80793 - 81647<br />\
    <img src="styles/legend/2021Population_1_10.png" /> 81647 - 82415<br />\
    <img src="styles/legend/2021Population_1_11.png" /> 82415 - 83649<br />\
    <img src="styles/legend/2021Population_1_12.png" /> 83649 - 87158<br />\
    <img src="styles/legend/2021Population_1_13.png" /> 87158 - 87607<br />\
    <img src="styles/legend/2021Population_1_14.png" /> 87607 - 88507<br />\
    <img src="styles/legend/2021Population_1_15.png" /> 88507 - 89087<br />\
    <img src="styles/legend/2021Population_1_16.png" /> 89087 - 89659<br />\
    <img src="styles/legend/2021Population_1_17.png" /> 89659 - 90165<br />\
    <img src="styles/legend/2021Population_1_18.png" /> 90165 - 94169<br />\
    <img src="styles/legend/2021Population_1_19.png" /> 94169 - 94965<br />\
    <img src="styles/legend/2021Population_1_20.png" /> 94965 - 95668<br />\
    <img src="styles/legend/2021Population_1_21.png" /> 95668 - 96473<br />\
    <img src="styles/legend/2021Population_1_22.png" /> 96473 - 98080<br />\
    <img src="styles/legend/2021Population_1_23.png" /> 98080 - 100421<br />\
    <img src="styles/legend/2021Population_1_24.png" /> 100421 - 101219<br />\
    <img src="styles/legend/2021Population_1_25.png" /> 101219 - 101373<br />\
    <img src="styles/legend/2021Population_1_26.png" /> 101373 - 101804<br />\
    <img src="styles/legend/2021Population_1_27.png" /> 101804 - 102178<br />\
    <img src="styles/legend/2021Population_1_28.png" /> 102178 - 102552<br />\
    <img src="styles/legend/2021Population_1_29.png" /> 102552 - 103712<br />\
    <img src="styles/legend/2021Population_1_30.png" /> 103712 - 104441<br />\
    <img src="styles/legend/2021Population_1_31.png" /> 104441 - 104572<br />\
    <img src="styles/legend/2021Population_1_32.png" /> 104572 - 105091<br />\
    <img src="styles/legend/2021Population_1_33.png" /> 105091 - 105547<br />\
    <img src="styles/legend/2021Population_1_34.png" /> 105547 - 105951<br />\
    <img src="styles/legend/2021Population_1_35.png" /> 105951 - 106341<br />\
    <img src="styles/legend/2021Population_1_36.png" /> 106341 - 106874<br />\
    <img src="styles/legend/2021Population_1_37.png" /> 106874 - 107104<br />\
    <img src="styles/legend/2021Population_1_38.png" /> 107104 - 107412<br />\
    <img src="styles/legend/2021Population_1_39.png" /> 107412 - 107800<br />\
    <img src="styles/legend/2021Population_1_40.png" /> 107800 - 108044<br />\
    <img src="styles/legend/2021Population_1_41.png" /> 108044 - 108424<br />\
    <img src="styles/legend/2021Population_1_42.png" /> 108424 - 108728<br />\
    <img src="styles/legend/2021Population_1_43.png" /> 108728 - 109186<br />\
    <img src="styles/legend/2021Population_1_44.png" /> 109186 - 109419<br />\
    <img src="styles/legend/2021Population_1_45.png" /> 109419 - 109846<br />\
    <img src="styles/legend/2021Population_1_46.png" /> 109846 - 110384<br />\
    <img src="styles/legend/2021Population_1_47.png" /> 110384 - 110728<br />\
    <img src="styles/legend/2021Population_1_48.png" /> 110728 - 111063<br />\
    <img src="styles/legend/2021Population_1_49.png" /> 111063 - 111322<br />\
    <img src="styles/legend/2021Population_1_50.png" /> 111322 - 111738<br />\
    <img src="styles/legend/2021Population_1_51.png" /> 111738 - 111990<br />\
    <img src="styles/legend/2021Population_1_52.png" /> 111990 - 112121<br />\
    <img src="styles/legend/2021Population_1_53.png" /> 112121 - 112926<br />\
    <img src="styles/legend/2021Population_1_54.png" /> 112926 - 113395<br />\
    <img src="styles/legend/2021Population_1_55.png" /> 113395 - 113661<br />\
    <img src="styles/legend/2021Population_1_56.png" /> 113661 - 114090<br />\
    <img src="styles/legend/2021Population_1_57.png" /> 114090 - 114729<br />\
    <img src="styles/legend/2021Population_1_58.png" /> 114729 - 115087<br />\
    <img src="styles/legend/2021Population_1_59.png" /> 115087 - 115449<br />\
    <img src="styles/legend/2021Population_1_60.png" /> 115449 - 116004<br />\
    <img src="styles/legend/2021Population_1_61.png" /> 116004 - 116437<br />\
    <img src="styles/legend/2021Population_1_62.png" /> 116437 - 116756<br />\
    <img src="styles/legend/2021Population_1_63.png" /> 116756 - 116941<br />\
    <img src="styles/legend/2021Population_1_64.png" /> 116941 - 118110<br />\
    <img src="styles/legend/2021Population_1_65.png" /> 118110 - 118632<br />\
    <img src="styles/legend/2021Population_1_66.png" /> 118632 - 118797<br />\
    <img src="styles/legend/2021Population_1_67.png" /> 118797 - 119245<br />\
    <img src="styles/legend/2021Population_1_68.png" /> 119245 - 119553<br />\
    <img src="styles/legend/2021Population_1_69.png" /> 119553 - 119861<br />\
    <img src="styles/legend/2021Population_1_70.png" /> 119861 - 120099<br />\
    <img src="styles/legend/2021Population_1_71.png" /> 120099 - 120666<br />\
    <img src="styles/legend/2021Population_1_72.png" /> 120666 - 121073<br />\
    <img src="styles/legend/2021Population_1_73.png" /> 121073 - 122342<br />\
    <img src="styles/legend/2021Population_1_74.png" /> 122342 - 122808<br />\
    <img src="styles/legend/2021Population_1_75.png" /> 122808 - 123238<br />\
    <img src="styles/legend/2021Population_1_76.png" /> 123238 - 123617<br />\
    <img src="styles/legend/2021Population_1_77.png" /> 123617 - 124134<br />\
    <img src="styles/legend/2021Population_1_78.png" /> 124134 - 124810<br />\
    <img src="styles/legend/2021Population_1_79.png" /> 124810 - 125111<br />\
    <img src="styles/legend/2021Population_1_80.png" /> 125111 - 125281<br />\
    <img src="styles/legend/2021Population_1_81.png" /> 125281 - 125632<br />\
    <img src="styles/legend/2021Population_1_82.png" /> 125632 - 126321<br />\
    <img src="styles/legend/2021Population_1_83.png" /> 126321 - 126877<br />\
    <img src="styles/legend/2021Population_1_84.png" /> 126877 - 127249<br />\
    <img src="styles/legend/2021Population_1_85.png" /> 127249 - 128496<br />\
    <img src="styles/legend/2021Population_1_86.png" /> 128496 - 129786<br />\
    <img src="styles/legend/2021Population_1_87.png" /> 129786 - 130740<br />\
    <img src="styles/legend/2021Population_1_88.png" /> 130740 - 131365<br />\
    <img src="styles/legend/2021Population_1_89.png" /> 131365 - 131808<br />\
    <img src="styles/legend/2021Population_1_90.png" /> 131808 - 132767<br />\
    <img src="styles/legend/2021Population_1_91.png" /> 132767 - 134295<br />\
    <img src="styles/legend/2021Population_1_92.png" /> 134295 - 135308<br />\
    <img src="styles/legend/2021Population_1_93.png" /> 135308 - 136345<br />\
    <img src="styles/legend/2021Population_1_94.png" /> 136345 - 138427<br />\
    <img src="styles/legend/2021Population_1_95.png" /> 138427 - 140397<br />\
    <img src="styles/legend/2021Population_1_96.png" /> 140397 - 144723<br />\
    <img src="styles/legend/2021Population_1_97.png" /> 144723 - 149040<br />\
    <img src="styles/legend/2021Population_1_98.png" /> 149040 - 157773<br />\
    <img src="styles/legend/2021Population_1_99.png" /> 157773 - 209431<br />'
        });

lyr_openstreetmap_0.setVisible(true);lyr_2021Population_1.setVisible(true);
var layersList = [lyr_openstreetmap_0,lyr_2021Population_1];
lyr_2021Population_1.set('fieldAliases', {'FED_NUM': 'FED_NUM', 'Federal El': 'Federal El', '2021 Popul': '2021 Popul', '2016 Popul': '2016 Popul', '% Change 2': '% Change 2', 'Population': 'Population', 'Federal Electoral District': 'Federal Electoral District', '2021 Population': '2021 Population', '2016 Population': '2016 Population', '% Change 2016-2021': '% Change 2016-2021', 'Population Density Per km^2': 'Population Density Per km^2', });
lyr_2021Population_1.set('fieldImages', {'FED_NUM': 'TextEdit', 'Federal El': 'TextEdit', '2021 Popul': 'TextEdit', '2016 Popul': 'TextEdit', '% Change 2': 'TextEdit', 'Population': 'TextEdit', 'Federal Electoral District': 'TextEdit', '2021 Population': 'TextEdit', '2016 Population': 'TextEdit', '% Change 2016-2021': 'TextEdit', 'Population Density Per km^2': 'TextEdit', });
lyr_2021Population_1.set('fieldLabels', {'FED_NUM': 'no label', 'Federal El': 'no label', '2021 Popul': 'no label', '2016 Popul': 'no label', '% Change 2': 'no label', 'Population': 'no label', 'Federal Electoral District': 'header label', '2021 Population': 'header label', '2016 Population': 'header label', '% Change 2016-2021': 'header label', 'Population Density Per km^2': 'header label', });
lyr_2021Population_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});