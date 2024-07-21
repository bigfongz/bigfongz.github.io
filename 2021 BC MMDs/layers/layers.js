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
var format_Constituencies_1 = new ol.format.GeoJSON();
var features_Constituencies_1 = format_Constituencies_1.readFeatures(json_Constituencies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Constituencies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constituencies_1.addFeatures(features_Constituencies_1);
var lyr_Constituencies_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Constituencies_1, 
                style: style_Constituencies_1,
                popuplayertitle: "Constituencies",
                interactive: true,
    title: 'Constituencies<br />\
    <img src="styles/legend/Constituencies_1_0.png" /> GRN +1<br />\
    <img src="styles/legend/Constituencies_1_1.png" /> GRN +10<br />\
    <img src="styles/legend/Constituencies_1_2.png" /> GRN +25<br />\
    <img src="styles/legend/Constituencies_1_3.png" /> LIB +1<br />\
    <img src="styles/legend/Constituencies_1_4.png" /> LIB +5<br />\
    <img src="styles/legend/Constituencies_1_5.png" /> LIB +10<br />\
    <img src="styles/legend/Constituencies_1_6.png" /> LIB +15<br />\
    <img src="styles/legend/Constituencies_1_7.png" /> LIB +20<br />\
    <img src="styles/legend/Constituencies_1_8.png" /> LIB +25<br />\
    <img src="styles/legend/Constituencies_1_9.png" /> LIB +35<br />\
    <img src="styles/legend/Constituencies_1_10.png" /> NDP +1<br />\
    <img src="styles/legend/Constituencies_1_11.png" /> NDP +5<br />\
    <img src="styles/legend/Constituencies_1_12.png" /> NDP +10<br />\
    <img src="styles/legend/Constituencies_1_13.png" /> NDP +15<br />\
    <img src="styles/legend/Constituencies_1_14.png" /> NDP +20<br />\
    <img src="styles/legend/Constituencies_1_15.png" /> NDP +25<br />\
    <img src="styles/legend/Constituencies_1_16.png" /> NDP +30<br />\
    <img src="styles/legend/Constituencies_1_17.png" /> NDP +35<br />\
    <img src="styles/legend/Constituencies_1_18.png" /> NDP +40<br />'
        });
var format_ListSeats_2 = new ol.format.GeoJSON();
var features_ListSeats_2 = format_ListSeats_2.readFeatures(json_ListSeats_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ListSeats_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ListSeats_2.addFeatures(features_ListSeats_2);
var lyr_ListSeats_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ListSeats_2, 
                style: style_ListSeats_2,
                popuplayertitle: "List Seats",
                interactive: true,
    title: 'List Seats<br />\
    <img src="styles/legend/ListSeats_2_0.png" /> NDP<br />\
    <img src="styles/legend/ListSeats_2_1.png" /> LIB<br />\
    <img src="styles/legend/ListSeats_2_2.png" /> GRN<br />\
    <img src="styles/legend/ListSeats_2_3.png" /> CON<br />\
    <img src="styles/legend/ListSeats_2_4.png" /> OTH<br />\
    <img src="styles/legend/ListSeats_2_5.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Constituencies_1.setVisible(true);lyr_ListSeats_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Constituencies_1,lyr_ListSeats_2];
lyr_Constituencies_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'LIB': 'LIB', 'GRN': 'GRN', 'CON': 'CON', 'OTH': 'OTH', });
lyr_ListSeats_2.set('fieldAliases', {'Name': 'Name', 'Party': 'Party', });
lyr_Constituencies_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'LIB': 'TextEdit', 'GRN': 'TextEdit', 'CON': 'TextEdit', 'OTH': 'TextEdit', });
lyr_ListSeats_2.set('fieldImages', {'Name': 'TextEdit', 'Party': 'TextEdit', });
lyr_Constituencies_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'header label - always visible', 'NDP': 'inline label - always visible', 'LIB': 'inline label - always visible', 'GRN': 'inline label - always visible', 'CON': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_ListSeats_2.set('fieldLabels', {'Name': 'header label - always visible', 'Party': 'header label - always visible', });
lyr_ListSeats_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});