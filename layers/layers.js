var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_MGN_DPTO_POLITICO_0 = new ol.format.GeoJSON();
var features_MGN_DPTO_POLITICO_0 = format_MGN_DPTO_POLITICO_0.readFeatures(json_MGN_DPTO_POLITICO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MGN_DPTO_POLITICO_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MGN_DPTO_POLITICO_0.addFeatures(features_MGN_DPTO_POLITICO_0);var lyr_MGN_DPTO_POLITICO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MGN_DPTO_POLITICO_0, 
                style: style_MGN_DPTO_POLITICO_0,
                title: '<img src="styles/legend/MGN_DPTO_POLITICO_0.png" /> MGN_DPTO_POLITICO'
            });var format_sur_1 = new ol.format.GeoJSON();
var features_sur_1 = format_sur_1.readFeatures(json_sur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sur_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sur_1.addFeatures(features_sur_1);var lyr_sur_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sur_1,
minResolution:0.140022330761,
 maxResolution:1400.22330761,

                style: style_sur_1,
    title: 'sur<br />\
    <img src="styles/legend/sur_1_0.png" /> ANDRES FELIPE IBARRA IBARRA<br />\
    <img src="styles/legend/sur_1_1.png" /> ANDRES FERNANDO SUAREZ BELTRAN<br />\
    <img src="styles/legend/sur_1_2.png" /> ANDRES HUMBERTO ARTUNDUAGA BERNAL<br />\
    <img src="styles/legend/sur_1_3.png" /> CAMILO ANDDRES NINCO IBARRA<br />\
    <img src="styles/legend/sur_1_4.png" /> DARIO FERNANDO MEJIA TERAN<br />\
    <img src="styles/legend/sur_1_5.png" /> DIANA CAROLINA CEDIEL CALVERA<br />\
    <img src="styles/legend/sur_1_6.png" /> DIEGO FERNANDO MENDEZ VARGAS<br />\
    <img src="styles/legend/sur_1_7.png" /> EDIMER OME MONCAYO<br />\
    <img src="styles/legend/sur_1_8.png" /> FUNCIONARIO BOGOTA 1<br />\
    <img src="styles/legend/sur_1_9.png" /> FUNCIONARIO CAFETERA 1<br />\
    <img src="styles/legend/sur_1_10.png" /> FUNCIONARIO CAFETERA 2<br />\
    <img src="styles/legend/sur_1_11.png" /> JAIME ARTURO MORENO SANCHEZ<br />\
    <img src="styles/legend/sur_1_12.png" /> JESUS ERMILO OROZCO LUGO<br />\
    <img src="styles/legend/sur_1_13.png" /> JOEL ENRIQUE SILVA FIERRO<br />\
    <img src="styles/legend/sur_1_14.png" /> JORGE ENRIQUE PEÑA<br />\
    <img src="styles/legend/sur_1_15.png" /> LUIS ANTONIO SOLARTE CERON<br />\
    <img src="styles/legend/sur_1_16.png" /> MARIO ALEJANDRO CALERO OIDOR<br />\
    <img src="styles/legend/sur_1_17.png" /> SONIA ESTHER MONTAÑA<br />\
    <img src="styles/legend/sur_1_18.png" /> WILSON ROSERO<br />\
    <img src="styles/legend/sur_1_19.png" /> YENNY ESPERANZA RIVERA<br />\
    <img src="styles/legend/sur_1_20.png" /> YESID JAVIER FONSECA LOPEZ<br />\
    <img src="styles/legend/sur_1_21.png" /> <br />'
        });var format_veredas_sur1_2 = new ol.format.GeoJSON();
var features_veredas_sur1_2 = format_veredas_sur1_2.readFeatures(json_veredas_sur1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veredas_sur1_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_veredas_sur1_2.addFeatures(features_veredas_sur1_2);var lyr_veredas_sur1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_veredas_sur1_2,
minResolution:2.80044661523,
 maxResolution:140.022330761,

                style: style_veredas_sur1_2,
                title: '<img src="styles/legend/veredas_sur1_2.png" /> veredas_sur1'
            });

lyr_MGN_DPTO_POLITICO_0.setVisible(true);lyr_sur_1.setVisible(true);lyr_veredas_sur1_2.setVisible(true);
var layersList = [baseLayer,lyr_MGN_DPTO_POLITICO_0,lyr_sur_1,lyr_veredas_sur1_2];
lyr_MGN_DPTO_POLITICO_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'DPTO_NACRC': 'DPTO_NACRC', 'DPTO_CACTO': 'DPTO_CACTO', 'DPTO_NANO': 'DPTO_NANO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_sur_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'd_codregio': 'd_codregio', 'd_REGIONAL': 'd_REGIONAL', 'd_asignaci': 'd_asignaci', 'd_operacio': 'd_operacio', 'd_LAT': 'd_LAT', 'd_LON': 'd_LON', 'orig_ogc_f': 'orig_ogc_f', });
lyr_veredas_sur1_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTOMPIO': 'DPTOMPIO', 'CODIGO_VER': 'CODIGO_VER', 'NOM_DEP': 'NOM_DEP', 'NOMB_MPIO': 'NOMB_MPIO', 'NOMBRE_VER': 'NOMBRE_VER', 'VIGENCIA': 'VIGENCIA', 'FUENTE': 'FUENTE', 'DESCRIPCIO': 'DESCRIPCIO', 'SEUDONIMOS': 'SEUDONIMOS', 'AREA_HA': 'AREA_HA', 'COD_DPTO': 'COD_DPTO', 'OBSERVACIO': 'OBSERVACIO', 'sur_d_codr': 'sur_d_codr', 'sur_d_REGI': 'sur_d_REGI', 'sur_d_asig': 'sur_d_asig', 'sur_d_oper': 'sur_d_oper', 'orig_ogc_f': 'orig_ogc_f', });
lyr_MGN_DPTO_POLITICO_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'DPTO_NACRC': 'TextEdit', 'DPTO_CACTO': 'TextEdit', 'DPTO_NANO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_sur_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_NANO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'd_codregio': 'TextEdit', 'd_REGIONAL': 'TextEdit', 'd_asignaci': 'TextEdit', 'd_operacio': 'TextEdit', 'd_LAT': 'TextEdit', 'd_LON': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_veredas_sur1_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTOMPIO': 'TextEdit', 'CODIGO_VER': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOMB_MPIO': 'TextEdit', 'NOMBRE_VER': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FUENTE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'SEUDONIMOS': 'TextEdit', 'AREA_HA': 'TextEdit', 'COD_DPTO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'sur_d_codr': 'TextEdit', 'sur_d_REGI': 'TextEdit', 'sur_d_asig': 'TextEdit', 'sur_d_oper': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_MGN_DPTO_POLITICO_0.set('fieldLabels', {'OBJECTID': 'no label', 'DPTO_CCDGO': 'no label', 'DPTO_CNMBR': 'no label', 'DPTO_NACRC': 'no label', 'DPTO_CACTO': 'no label', 'DPTO_NANO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_sur_1.set('fieldLabels', {'OBJECTID': 'no label', 'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_NANO': 'no label', 'DPTO_CNMBR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'd_codregio': 'no label', 'd_REGIONAL': 'no label', 'd_asignaci': 'no label', 'd_operacio': 'no label', 'd_LAT': 'no label', 'd_LON': 'no label', 'orig_ogc_f': 'no label', });
lyr_veredas_sur1_2.set('fieldLabels', {'OBJECTID': 'no label', 'DPTOMPIO': 'no label', 'CODIGO_VER': 'no label', 'NOM_DEP': 'no label', 'NOMB_MPIO': 'no label', 'NOMBRE_VER': 'no label', 'VIGENCIA': 'no label', 'FUENTE': 'no label', 'DESCRIPCIO': 'no label', 'SEUDONIMOS': 'no label', 'AREA_HA': 'no label', 'COD_DPTO': 'no label', 'OBSERVACIO': 'no label', 'sur_d_codr': 'no label', 'sur_d_REGI': 'no label', 'sur_d_asig': 'no label', 'sur_d_oper': 'no label', 'orig_ogc_f': 'no label', });
lyr_veredas_sur1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});