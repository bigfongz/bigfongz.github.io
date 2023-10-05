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
var format_AlbertaNoCitiesTowns_1 = new ol.format.GeoJSON();
var features_AlbertaNoCitiesTowns_1 = format_AlbertaNoCitiesTowns_1.readFeatures(json_AlbertaNoCitiesTowns_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaNoCitiesTowns_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaNoCitiesTowns_1.addFeatures(features_AlbertaNoCitiesTowns_1);
var lyr_AlbertaNoCitiesTowns_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlbertaNoCitiesTowns_1, 
                style: style_AlbertaNoCitiesTowns_1,
                interactive: true,
    title: 'Alberta No Cities & Towns<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_0.png" /> NDP +1<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_1.png" /> NDP +5<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_2.png" /> NDP +10<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_3.png" /> NDP +15<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_4.png" /> NDP +20<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_5.png" /> NDP +25<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_6.png" /> NDP +30<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_7.png" /> NDP +35<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_8.png" /> NDP +45<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_9.png" /> NDP +55<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_10.png" /> NDP +65<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_11.png" /> NDP +70<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_12.png" /> NDP +75<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_13.png" /> NDP +80<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_14.png" /> NDP +85<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_15.png" /> NDP +90<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_16.png" /> NDP +95<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_17.png" /> PC +1<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_18.png" /> PC +5<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_19.png" /> PC +10<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_20.png" /> PC +15<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_21.png" /> PC +20<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_22.png" /> PC +30<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_23.png" /> PC +40<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_24.png" /> PC +45<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_25.png" /> WP +1<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_26.png" /> WP +5<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_27.png" /> WP +10<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_28.png" /> WP +15<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_29.png" /> WP +20<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_30.png" /> WP +25<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_31.png" /> WP +30<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_32.png" /> WP +35<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_33.png" /> WP +40<br />\
    <img src="styles/legend/AlbertaNoCitiesTowns_1_34.png" /> WP +45<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AlbertaNoCitiesTowns_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AlbertaNoCitiesTowns_1];
lyr_AlbertaNoCitiesTowns_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'NDP': 'NDP', 'PC': 'PC', 'WP': 'WP', 'LIB': 'LIB', 'AP': 'AP', 'GRN': 'GRN', 'Others': 'Others', 'Population': 'Population', });
lyr_AlbertaNoCitiesTowns_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'NDP': 'TextEdit', 'PC': 'TextEdit', 'WP': 'TextEdit', 'LIB': 'TextEdit', 'AP': 'TextEdit', 'GRN': 'TextEdit', 'Others': 'TextEdit', 'Population': 'TextEdit', });
lyr_AlbertaNoCitiesTowns_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'NDP': 'header label', 'PC': 'header label', 'WP': 'header label', 'LIB': 'header label', 'AP': 'header label', 'GRN': 'header label', 'Others': 'header label', 'Population': 'header label', });
lyr_AlbertaNoCitiesTowns_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});