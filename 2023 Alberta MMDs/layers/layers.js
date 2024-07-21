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
var format_2023_1 = new ol.format.GeoJSON();
var features_2023_1 = format_2023_1.readFeatures(json_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_1.addFeatures(features_2023_1);
var lyr_2023_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2023_1, 
                style: style_2023_1,
                popuplayertitle: "2023",
                interactive: true,
    title: '2023<br />\
    <img src="styles/legend/2023_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/2023_1_1.png" /> NDP +10<br />\
    <img src="styles/legend/2023_1_2.png" /> NDP +15<br />\
    <img src="styles/legend/2023_1_3.png" /> NDP +20<br />\
    <img src="styles/legend/2023_1_4.png" /> NDP +35<br />\
    <img src="styles/legend/2023_1_5.png" /> NDP +45<br />\
    <img src="styles/legend/2023_1_6.png" /> UCP +1<br />\
    <img src="styles/legend/2023_1_7.png" /> UCP +5<br />\
    <img src="styles/legend/2023_1_8.png" /> UCP +10<br />\
    <img src="styles/legend/2023_1_9.png" /> UCP +15<br />\
    <img src="styles/legend/2023_1_10.png" /> UCP +20<br />\
    <img src="styles/legend/2023_1_11.png" /> UCP +25<br />\
    <img src="styles/legend/2023_1_12.png" /> UCP +30<br />\
    <img src="styles/legend/2023_1_13.png" /> UCP +35<br />\
    <img src="styles/legend/2023_1_14.png" /> UCP +40<br />\
    <img src="styles/legend/2023_1_15.png" /> UCP +45<br />\
    <img src="styles/legend/2023_1_16.png" /> UCP +50<br />\
    <img src="styles/legend/2023_1_17.png" /> UCP +55<br />\
    <img src="styles/legend/2023_1_18.png" /> UCP +65<br />'
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
    <img src="styles/legend/ListSeats_2_0.png" /> UCP<br />\
    <img src="styles/legend/ListSeats_2_1.png" /> NDP<br />\
    <img src="styles/legend/ListSeats_2_2.png" /> GPC<br />\
    <img src="styles/legend/ListSeats_2_3.png" /> AP<br />\
    <img src="styles/legend/ListSeats_2_4.png" /> OTH<br />\
    <img src="styles/legend/ListSeats_2_5.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2023_1.setVisible(true);lyr_ListSeats_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2023_1,lyr_ListSeats_2];
lyr_2023_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'UCP': 'UCP', 'NDP': 'NDP', 'GPA': 'GPA', 'AP': 'AP', 'OTH': 'OTH', });
lyr_ListSeats_2.set('fieldAliases', {'Name': 'Name', 'Party': 'Party', });
lyr_2023_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'UCP': 'TextEdit', 'NDP': 'TextEdit', 'GPA': 'TextEdit', 'AP': 'TextEdit', 'OTH': 'TextEdit', });
lyr_ListSeats_2.set('fieldImages', {'Name': 'TextEdit', 'Party': 'TextEdit', });
lyr_2023_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'header label - always visible', 'UCP': 'inline label - always visible', 'NDP': 'inline label - always visible', 'GPA': 'inline label - always visible', 'AP': 'inline label - always visible', 'OTH': 'inline label - always visible', });
lyr_ListSeats_2.set('fieldLabels', {'Name': 'header label - always visible', 'Party': 'header label - always visible', });
lyr_ListSeats_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});