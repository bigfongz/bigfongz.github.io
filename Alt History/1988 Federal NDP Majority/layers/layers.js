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
var format_1988FederalNDPMajority_1 = new ol.format.GeoJSON();
var features_1988FederalNDPMajority_1 = format_1988FederalNDPMajority_1.readFeatures(json_1988FederalNDPMajority_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1988FederalNDPMajority_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1988FederalNDPMajority_1.addFeatures(features_1988FederalNDPMajority_1);
var lyr_1988FederalNDPMajority_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1988FederalNDPMajority_1, 
                style: style_1988FederalNDPMajority_1,
                interactive: true,
    title: '1988 Federal NDP Majority<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_0.png" /> LPC +1<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_1.png" /> LPC +5<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_2.png" /> LPC +10<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_3.png" /> LPC +15<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_4.png" /> LPC +20<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_5.png" /> LPC +25<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_6.png" /> LPC +30<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_7.png" /> LPC +35<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_8.png" /> LPC +40<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_9.png" /> LPC +45<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_10.png" /> LPC +50<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_11.png" /> NDP +1<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_12.png" /> NDP +5<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_13.png" /> NDP +10<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_14.png" /> NDP +15<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_15.png" /> NDP +20<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_16.png" /> NDP +25<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_17.png" /> NDP +30<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_18.png" /> NDP +35<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_19.png" /> NDP +40<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_20.png" /> NDP +45<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_21.png" /> NDP +50<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_22.png" /> NDP +55<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_23.png" /> NDP +60<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_24.png" /> NDP +65<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_25.png" /> PC +1<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_26.png" /> PC +5<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_27.png" /> PC +10<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_28.png" /> PC +15<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_29.png" /> PC +20<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_30.png" /> PC +25<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_31.png" /> PC +30<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_32.png" /> PC +35<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_33.png" /> PC +40<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_34.png" /> PC +45<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_35.png" /> PC +50<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_36.png" /> PC +60<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_37.png" /> PC +65<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_38.png" /> RPC +1<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_39.png" /> RPC +5<br />\
    <img src="styles/legend/1988FederalNDPMajority_1_40.png" /> RPC +10<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_1988FederalNDPMajority_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1988FederalNDPMajority_1];
lyr_1988FederalNDPMajority_1.set('fieldAliases', {'Name': 'Name', 'Difference': 'Difference', 'MP': 'MP', 'LPC': 'LPC', 'PC': 'PC', 'NDP': 'NDP', 'RPC': 'RPC', 'Others': 'Others', });
lyr_1988FederalNDPMajority_1.set('fieldImages', {'Name': 'TextEdit', 'Difference': 'TextEdit', 'MP': 'TextEdit', 'LPC': 'TextEdit', 'PC': 'TextEdit', 'NDP': 'TextEdit', 'RPC': 'TextEdit', 'Others': 'TextEdit', });
lyr_1988FederalNDPMajority_1.set('fieldLabels', {'Name': 'header label', 'Difference': 'header label', 'MP': 'header label', 'LPC': 'header label', 'PC': 'header label', 'NDP': 'header label', 'RPC': 'header label', 'Others': 'header label', });
lyr_1988FederalNDPMajority_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});