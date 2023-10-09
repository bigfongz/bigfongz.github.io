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
var format_DistrictofAthabasca_1 = new ol.format.GeoJSON();
var features_DistrictofAthabasca_1 = format_DistrictofAthabasca_1.readFeatures(json_DistrictofAthabasca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictofAthabasca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictofAthabasca_1.addFeatures(features_DistrictofAthabasca_1);
var lyr_DistrictofAthabasca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictofAthabasca_1, 
                style: style_DistrictofAthabasca_1,
                interactive: true,
    title: 'District of Athabasca<br />\
    <img src="styles/legend/DistrictofAthabasca_1_0.png" /> CON +25<br />\
    <img src="styles/legend/DistrictofAthabasca_1_1.png" /> CON +30<br />\
    <img src="styles/legend/DistrictofAthabasca_1_2.png" /> CON +35<br />\
    <img src="styles/legend/DistrictofAthabasca_1_3.png" /> CON +40<br />\
    <img src="styles/legend/DistrictofAthabasca_1_4.png" /> CON +45<br />\
    <img src="styles/legend/DistrictofAthabasca_1_5.png" /> CON +50<br />\
    <img src="styles/legend/DistrictofAthabasca_1_6.png" /> CON +55<br />\
    <img src="styles/legend/DistrictofAthabasca_1_7.png" /> CON +60<br />\
    <img src="styles/legend/DistrictofAthabasca_1_8.png" /> CON +65<br />\
    <img src="styles/legend/DistrictofAthabasca_1_9.png" /> NDP +25<br />\
    <img src="styles/legend/DistrictofAthabasca_1_10.png" /> NDP +60<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DistrictofAthabasca_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DistrictofAthabasca_1];
lyr_DistrictofAthabasca_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'CON': 'CON', 'NDP': 'NDP', 'Others': 'Others', 'Population': 'Population', });
lyr_DistrictofAthabasca_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'CON': 'TextEdit', 'NDP': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_DistrictofAthabasca_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'CON': 'header label', 'NDP': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_DistrictofAthabasca_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});