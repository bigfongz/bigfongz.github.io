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
var format_AB_1 = new ol.format.GeoJSON();
var features_AB_1 = format_AB_1.readFeatures(json_AB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AB_1.addFeatures(features_AB_1);
var lyr_AB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AB_1, 
                style: style_AB_1,
                interactive: true,
    title: 'AB<br />\
    <img src="styles/legend/AB_1_0.png" /> Summer Village<br />\
    <img src="styles/legend/AB_1_1.png" /> Village<br />\
    <img src="styles/legend/AB_1_2.png" /> Town<br />\
    <img src="styles/legend/AB_1_3.png" /> City<br />\
    <img src="styles/legend/AB_1_4.png" /> Municipal District<br />\
    <img src="styles/legend/AB_1_5.png" /> Specialized Municipality<br />\
    <img src="styles/legend/AB_1_6.png" /> Special Area<br />\
    <img src="styles/legend/AB_1_7.png" /> Improvement District<br />\
    <img src="styles/legend/AB_1_8.png" /> Indian Reserve<br />\
    <img src="styles/legend/AB_1_9.png" /> Indian Settlement<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AB_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AB_1];
lyr_AB_1.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', '2021 Pop': '2021 Pop', 'Land Area': 'Land Area', });
lyr_AB_1.set('fieldImages', {'Name': 'TextEdit', 'Type': 'TextEdit', '2021 Pop': 'TextEdit', 'Land Area': 'TextEdit', });
lyr_AB_1.set('fieldLabels', {'Name': 'header label', 'Type': 'header label', '2021 Pop': 'header label', 'Land Area': 'header label', });
lyr_AB_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});