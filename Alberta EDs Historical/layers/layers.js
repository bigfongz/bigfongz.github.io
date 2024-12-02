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
var format_2003_1 = new ol.format.GeoJSON();
var features_2003_1 = format_2003_1.readFeatures(json_2003_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2003_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2003_1.addFeatures(features_2003_1);
var lyr_2003_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2003_1, 
                style: style_2003_1,
                popuplayertitle: "2003",
                interactive: true,
                title: '<img src="styles/legend/2003_1.png" /> 2003'
            });
var format_2010_2 = new ol.format.GeoJSON();
var features_2010_2 = format_2010_2.readFeatures(json_2010_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_2.addFeatures(features_2010_2);
var lyr_2010_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2010_2, 
                style: style_2010_2,
                popuplayertitle: "2010",
                interactive: true,
                title: '<img src="styles/legend/2010_2.png" /> 2010'
            });
var format_2017_3 = new ol.format.GeoJSON();
var features_2017_3 = format_2017_3.readFeatures(json_2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_3.addFeatures(features_2017_3);
var lyr_2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017_3, 
                style: style_2017_3,
                popuplayertitle: "2017",
                interactive: true,
                title: '<img src="styles/legend/2017_3.png" /> 2017'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2003_1.setVisible(false);lyr_2010_2.setVisible(false);lyr_2017_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2003_1,lyr_2010_2,lyr_2017_3];
lyr_2003_1.set('fieldAliases', {'Name': 'Name', });
lyr_2010_2.set('fieldAliases', {'Name': 'Name', });
lyr_2017_3.set('fieldAliases', {'Name': 'Name', });
lyr_2003_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_2010_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_2017_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_2003_1.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_2010_2.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_2017_3.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_2017_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});