var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Neighbourhoods_2 = new ol.format.GeoJSON();
var features_Neighbourhoods_2 = format_Neighbourhoods_2.readFeatures(json_Neighbourhoods_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighbourhoods_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighbourhoods_2.addFeatures(features_Neighbourhoods_2);
var lyr_Neighbourhoods_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Neighbourhoods_2, 
                style: style_Neighbourhoods_2,
                popuplayertitle: "Neighbourhoods",
                interactive: true,
                title: '<img src="styles/legend/Neighbourhoods_2.png" /> Neighbourhoods'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Neighbourhoods_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Neighbourhoods_2];
lyr_Neighbourhoods_2.set('fieldAliases', {'Name': 'Name', });
lyr_Neighbourhoods_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Neighbourhoods_2.set('fieldLabels', {'Name': 'no label', });
lyr_Neighbourhoods_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});