var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DistrictofSaskatchewan_1 = new ol.format.GeoJSON();
var features_DistrictofSaskatchewan_1 = format_DistrictofSaskatchewan_1.readFeatures(json_DistrictofSaskatchewan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictofSaskatchewan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictofSaskatchewan_1.addFeatures(features_DistrictofSaskatchewan_1);
var lyr_DistrictofSaskatchewan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictofSaskatchewan_1, 
                style: style_DistrictofSaskatchewan_1,
                interactive: true,
    title: 'District of Saskatchewan<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_0.png" /> CON +1<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_1.png" /> CON +5<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_2.png" /> CON +10<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_3.png" /> CON +15<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_4.png" /> CON +20<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_5.png" /> CON +25<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_6.png" /> CON +30<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_7.png" /> CON +35<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_8.png" /> CON +40<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_9.png" /> CON +45<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_10.png" /> CON +50<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_11.png" /> CON +55<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_12.png" /> CON +60<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_13.png" /> CON +65<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_14.png" /> CON +75<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_15.png" /> NDP +5<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_16.png" /> NDP +10<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_17.png" /> NDP +20<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_18.png" /> NDP +25<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_19.png" /> NDP +30<br />\
    <img src="styles/legend/DistrictofSaskatchewan_1_20.png" /> NDP +40<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DistrictofSaskatchewan_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DistrictofSaskatchewan_1];
lyr_DistrictofSaskatchewan_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CON': 'CON', 'NDP': 'NDP', 'BUF': 'BUF', 'Others': 'Others', 'Population': 'Population', });
lyr_DistrictofSaskatchewan_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CON': 'TextEdit', 'NDP': 'TextEdit', 'BUF': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_DistrictofSaskatchewan_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'CON': 'header label', 'NDP': 'header label', 'BUF': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_DistrictofSaskatchewan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});