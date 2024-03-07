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
var format_2021_1 = new ol.format.GeoJSON();
var features_2021_1 = format_2021_1.readFeatures(json_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_1.addFeatures(features_2021_1);
var lyr_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_1, 
                style: style_2021_1,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_1_0.png" /> GRN +1<br />\
    <img src="styles/legend/2021_1_1.png" /> GRN +25<br />\
    <img src="styles/legend/2021_1_2.png" /> GRN +30<br />\
    <img src="styles/legend/2021_1_3.png" /> LIB +1<br />\
    <img src="styles/legend/2021_1_4.png" /> PA +5<br />\
    <img src="styles/legend/2021_1_5.png" /> PA +20<br />\
    <img src="styles/legend/2021_1_6.png" /> PA +30<br />\
    <img src="styles/legend/2021_1_7.png" /> PC +1<br />\
    <img src="styles/legend/2021_1_8.png" /> PC +5<br />\
    <img src="styles/legend/2021_1_9.png" /> PC +10<br />\
    <img src="styles/legend/2021_1_10.png" /> PC +15<br />\
    <img src="styles/legend/2021_1_11.png" /> PC +20<br />\
    <img src="styles/legend/2021_1_12.png" /> PC +25<br />\
    <img src="styles/legend/2021_1_13.png" /> PC +30<br />\
    <img src="styles/legend/2021_1_14.png" /> PC +35<br />\
    <img src="styles/legend/2021_1_15.png" /> PC +40<br />\
    <img src="styles/legend/2021_1_16.png" /> PC +45<br />\
    <img src="styles/legend/2021_1_17.png" /> PC +50<br />\
    <img src="styles/legend/2021_1_18.png" /> PC +55<br />\
    <img src="styles/legend/2021_1_19.png" /> PC +60<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2021_1];
lyr_2021_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'PC': 'PC', 'LIB': 'LIB', 'GRN': 'GRN', 'PA': 'PA', 'NDP': 'NDP', 'IND': 'IND', });
lyr_2021_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'PC': 'TextEdit', 'LIB': 'TextEdit', 'GRN': 'TextEdit', 'PA': 'TextEdit', 'NDP': 'TextEdit', 'IND': 'TextEdit', });
lyr_2021_1.set('fieldLabels', {'Name': 'header label - always visible', 'Difference': 'inline label - always visible', 'PC': 'inline label - always visible', 'LIB': 'inline label - always visible', 'GRN': 'inline label - always visible', 'PA': 'inline label - always visible', 'NDP': 'inline label - always visible', 'IND': 'inline label - always visible', });
lyr_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});