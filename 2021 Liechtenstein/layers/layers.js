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
var format_Municipalities_1 = new ol.format.GeoJSON();
var features_Municipalities_1 = format_Municipalities_1.readFeatures(json_Municipalities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalities_1.addFeatures(features_Municipalities_1);
var lyr_Municipalities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipalities_1, 
                style: style_Municipalities_1,
                popuplayertitle: "Municipalities",
                interactive: true,
    title: 'Municipalities<br />\
    <img src="styles/legend/Municipalities_1_0.png" /> FBP +1<br />\
    <img src="styles/legend/Municipalities_1_1.png" /> FBP +5<br />\
    <img src="styles/legend/Municipalities_1_2.png" /> FBP +10<br />\
    <img src="styles/legend/Municipalities_1_3.png" /> VU +1<br />\
    <img src="styles/legend/Municipalities_1_4.png" /> VU +5<br />\
    <img src="styles/legend/Municipalities_1_5.png" /> VU +10<br />'
        });
var format_Constituencies_2 = new ol.format.GeoJSON();
var features_Constituencies_2 = format_Constituencies_2.readFeatures(json_Constituencies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Constituencies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constituencies_2.addFeatures(features_Constituencies_2);
var lyr_Constituencies_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Constituencies_2, 
                style: style_Constituencies_2,
                popuplayertitle: "Constituencies",
                interactive: true,
                title: '<img src="styles/legend/Constituencies_2.png" /> Constituencies'
            });
var format_ListSeats_3 = new ol.format.GeoJSON();
var features_ListSeats_3 = format_ListSeats_3.readFeatures(json_ListSeats_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ListSeats_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ListSeats_3.addFeatures(features_ListSeats_3);
var lyr_ListSeats_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ListSeats_3, 
                style: style_ListSeats_3,
                popuplayertitle: "List Seats",
                interactive: true,
    title: 'List Seats<br />\
    <img src="styles/legend/ListSeats_3_0.png" /> VU<br />\
    <img src="styles/legend/ListSeats_3_1.png" /> FBP<br />\
    <img src="styles/legend/ListSeats_3_2.png" /> FL<br />\
    <img src="styles/legend/ListSeats_3_3.png" /> DpL<br />\
    <img src="styles/legend/ListSeats_3_4.png" /> DU<br />\
    <img src="styles/legend/ListSeats_3_5.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Municipalities_1.setVisible(true);lyr_Constituencies_2.setVisible(true);lyr_ListSeats_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Municipalities_1,lyr_Constituencies_2,lyr_ListSeats_3];
lyr_Municipalities_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'VU': 'VU', 'FBP': 'FBP', 'FL': 'FL', 'DpL': 'DpL', 'DU': 'DU', });
lyr_Constituencies_2.set('fieldAliases', {'Name': 'Name', });
lyr_ListSeats_3.set('fieldAliases', {'Name': 'Name', 'Party': 'Party', });
lyr_Municipalities_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'VU': 'TextEdit', 'FBP': 'TextEdit', 'FL': 'TextEdit', 'DpL': 'TextEdit', 'DU': 'TextEdit', });
lyr_Constituencies_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_ListSeats_3.set('fieldImages', {'Name': 'TextEdit', 'Party': 'TextEdit', });
lyr_Municipalities_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'header label - always visible', 'VU': 'inline label - always visible', 'FBP': 'inline label - always visible', 'FL': 'inline label - always visible', 'DpL': 'inline label - always visible', 'DU': 'inline label - always visible', });
lyr_Constituencies_2.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_ListSeats_3.set('fieldLabels', {'Name': 'header label - always visible', 'Party': 'header label - always visible', });
lyr_ListSeats_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});