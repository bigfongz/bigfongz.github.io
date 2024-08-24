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

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PopulatedPlaces_2 = new ol.format.GeoJSON();
var features_PopulatedPlaces_2 = format_PopulatedPlaces_2.readFeatures(json_PopulatedPlaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulatedPlaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulatedPlaces_2.addFeatures(features_PopulatedPlaces_2);
var lyr_PopulatedPlaces_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulatedPlaces_2, 
                style: style_PopulatedPlaces_2,
                popuplayertitle: "Populated Places",
                interactive: true,
                title: '<img src="styles/legend/PopulatedPlaces_2.png" /> Populated Places'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_PopulatedPlaces_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_PopulatedPlaces_2];
lyr_PopulatedPlaces_2.set('fieldAliases', {'Name': 'Name', });
lyr_PopulatedPlaces_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_PopulatedPlaces_2.set('fieldLabels', {'Name': 'no label', });
lyr_PopulatedPlaces_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});