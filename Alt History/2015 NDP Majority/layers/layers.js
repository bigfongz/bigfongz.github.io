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
var format_2015NDPMajority_1 = new ol.format.GeoJSON();
var features_2015NDPMajority_1 = format_2015NDPMajority_1.readFeatures(json_2015NDPMajority_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015NDPMajority_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015NDPMajority_1.addFeatures(features_2015NDPMajority_1);
var lyr_2015NDPMajority_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2015NDPMajority_1, 
                style: style_2015NDPMajority_1,
                interactive: true,
    title: '2015 NDP Majority<br />\
    <img src="styles/legend/2015NDPMajority_1_0.png" /> CPC +1<br />\
    <img src="styles/legend/2015NDPMajority_1_1.png" /> CPC +5<br />\
    <img src="styles/legend/2015NDPMajority_1_2.png" /> CPC +10<br />\
    <img src="styles/legend/2015NDPMajority_1_3.png" /> CPC +15<br />\
    <img src="styles/legend/2015NDPMajority_1_4.png" /> CPC +20<br />\
    <img src="styles/legend/2015NDPMajority_1_5.png" /> CPC +25<br />\
    <img src="styles/legend/2015NDPMajority_1_6.png" /> CPC +30<br />\
    <img src="styles/legend/2015NDPMajority_1_7.png" /> CPC +40<br />\
    <img src="styles/legend/2015NDPMajority_1_8.png" /> GPC +20<br />\
    <img src="styles/legend/2015NDPMajority_1_9.png" /> LPC +1<br />\
    <img src="styles/legend/2015NDPMajority_1_10.png" /> LPC +5<br />\
    <img src="styles/legend/2015NDPMajority_1_11.png" /> LPC +10<br />\
    <img src="styles/legend/2015NDPMajority_1_12.png" /> LPC +15<br />\
    <img src="styles/legend/2015NDPMajority_1_13.png" /> LPC +20<br />\
    <img src="styles/legend/2015NDPMajority_1_14.png" /> LPC +25<br />\
    <img src="styles/legend/2015NDPMajority_1_15.png" /> LPC +30<br />\
    <img src="styles/legend/2015NDPMajority_1_16.png" /> LPC +35<br />\
    <img src="styles/legend/2015NDPMajority_1_17.png" /> NDP +1<br />\
    <img src="styles/legend/2015NDPMajority_1_18.png" /> NDP +5<br />\
    <img src="styles/legend/2015NDPMajority_1_19.png" /> NDP +10<br />\
    <img src="styles/legend/2015NDPMajority_1_20.png" /> NDP +15<br />\
    <img src="styles/legend/2015NDPMajority_1_21.png" /> NDP +20<br />\
    <img src="styles/legend/2015NDPMajority_1_22.png" /> NDP +25<br />\
    <img src="styles/legend/2015NDPMajority_1_23.png" /> NDP +30<br />\
    <img src="styles/legend/2015NDPMajority_1_24.png" /> NDP +35<br />\
    <img src="styles/legend/2015NDPMajority_1_25.png" /> NDP +40<br />\
    <img src="styles/legend/2015NDPMajority_1_26.png" /> NDP +45<br />\
    <img src="styles/legend/2015NDPMajority_1_27.png" /> NDP +50<br />\
    <img src="styles/legend/2015NDPMajority_1_28.png" /> NDP +55<br />\
    <img src="styles/legend/2015NDPMajority_1_29.png" /> NDP +65<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_2015NDPMajority_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2015NDPMajority_1];
lyr_2015NDPMajority_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'MP': 'MP', 'CPC': 'CPC', 'NDP': 'NDP', 'LPC': 'LPC', 'BQ': 'BQ', 'GPC': 'GPC', 'Others': 'Others', });
lyr_2015NDPMajority_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'MP': 'TextEdit', 'CPC': 'TextEdit', 'NDP': 'TextEdit', 'LPC': 'TextEdit', 'BQ': 'TextEdit', 'GPC': 'TextEdit', 'Others': 'TextEdit', });
lyr_2015NDPMajority_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'MP': 'header label', 'CPC': 'header label', 'NDP': 'header label', 'LPC': 'header label', 'BQ': 'header label', 'GPC': 'header label', 'Others': 'header label', });
lyr_2015NDPMajority_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});