var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Clippedmask_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13621012.631556, -487764.163616, 13622584.073283, -486734.699008]
        })
    });
var format_RuteSurveiVDM_2 = new ol.format.GeoJSON();
var features_RuteSurveiVDM_2 = format_RuteSurveiVDM_2.readFeatures(json_RuteSurveiVDM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSurveiVDM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSurveiVDM_2.addFeatures(features_RuteSurveiVDM_2);
var lyr_RuteSurveiVDM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSurveiVDM_2, 
                style: style_RuteSurveiVDM_2,
                popuplayertitle: 'Rute Survei VDM',
                interactive: true,
                title: '<img src="styles/legend/RuteSurveiVDM_2.png" /> Rute Survei VDM'
            });
var format_171025UpdateWIUPVDM_3 = new ol.format.GeoJSON();
var features_171025UpdateWIUPVDM_3 = format_171025UpdateWIUPVDM_3.readFeatures(json_171025UpdateWIUPVDM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_171025UpdateWIUPVDM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_171025UpdateWIUPVDM_3.addFeatures(features_171025UpdateWIUPVDM_3);
var lyr_171025UpdateWIUPVDM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_171025UpdateWIUPVDM_3, 
                style: style_171025UpdateWIUPVDM_3,
                popuplayertitle: '171025 Update WIUP VDM',
                interactive: true,
    title: '171025 Update WIUP VDM<br />\
    <img src="styles/legend/171025UpdateWIUPVDM_3_0.png" /> VDM<br />\
    <img src="styles/legend/171025UpdateWIUPVDM_3_1.png" /> <br />' });
var format_161025DrillPlanVDM_4 = new ol.format.GeoJSON();
var features_161025DrillPlanVDM_4 = format_161025DrillPlanVDM_4.readFeatures(json_161025DrillPlanVDM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_161025DrillPlanVDM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_161025DrillPlanVDM_4.addFeatures(features_161025DrillPlanVDM_4);
var lyr_161025DrillPlanVDM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_161025DrillPlanVDM_4, 
                style: style_161025DrillPlanVDM_4,
                popuplayertitle: '161025 Drill Plan VDM',
                interactive: true,
                title: '<img src="styles/legend/161025DrillPlanVDM_4.png" /> 161025 Drill Plan VDM'
            });
var format_171025DataSurveiVDM_5 = new ol.format.GeoJSON();
var features_171025DataSurveiVDM_5 = format_171025DataSurveiVDM_5.readFeatures(json_171025DataSurveiVDM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_171025DataSurveiVDM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_171025DataSurveiVDM_5.addFeatures(features_171025DataSurveiVDM_5);
var lyr_171025DataSurveiVDM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_171025DataSurveiVDM_5, 
                style: style_171025DataSurveiVDM_5,
                popuplayertitle: '171025 Data Survei VDM',
                interactive: true,
                title: '<img src="styles/legend/171025DataSurveiVDM_5.png" /> 171025 Data Survei VDM'
            });
var format_GISVISIBlokVDM_6 = new ol.format.GeoJSON();
var features_GISVISIBlokVDM_6 = format_GISVISIBlokVDM_6.readFeatures(json_GISVISIBlokVDM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISVISIBlokVDM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISVISIBlokVDM_6.addFeatures(features_GISVISIBlokVDM_6);
var lyr_GISVISIBlokVDM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISVISIBlokVDM_6, 
                style: style_GISVISIBlokVDM_6,
                popuplayertitle: 'GIS VISI — Blok VDM',
                interactive: true,
                title: '<img src="styles/legend/GISVISIBlokVDM_6.png" /> GIS VISI — Blok VDM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Clippedmask_1.setVisible(true);lyr_RuteSurveiVDM_2.setVisible(true);lyr_171025UpdateWIUPVDM_3.setVisible(true);lyr_161025DrillPlanVDM_4.setVisible(true);lyr_171025DataSurveiVDM_5.setVisible(true);lyr_GISVISIBlokVDM_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Clippedmask_1,lyr_RuteSurveiVDM_2,lyr_171025UpdateWIUPVDM_3,lyr_161025DrillPlanVDM_4,lyr_171025DataSurveiVDM_5,lyr_GISVISIBlokVDM_6];
lyr_RuteSurveiVDM_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_171025UpdateWIUPVDM_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_161025DrillPlanVDM_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Hole ID': 'Hole ID', 'Remarks': 'Remarks', });
lyr_171025DataSurveiVDM_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'Kode Sample': 'Kode Sample', 'X': 'X', 'Y': 'Y', 'INC.': 'INC.', 'WEIGHT (Kg)': 'WEIGHT (Kg)', 'Ni': 'Ni', 'Co': 'Co', 'Fe': 'Fe', 'SiO2': 'SiO2', 'CaO': 'CaO', 'MgO': 'MgO', 'Al2O3': 'Al2O3', 'SiMa': 'SiMa', });
lyr_GISVISIBlokVDM_6.set('fieldAliases', {'fid': 'fid', 'Id Blok': 'Id Blok', });
lyr_RuteSurveiVDM_2.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_171025UpdateWIUPVDM_3.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_161025DrillPlanVDM_4.set('fieldImages', {'fid': '', 'Name': '', 'Hole ID': '', 'Remarks': '', });
lyr_171025DataSurveiVDM_5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'Kode Sample': '', 'X': '', 'Y': '', 'INC.': '', 'WEIGHT (Kg)': '', 'Ni': '', 'Co': '', 'Fe': '', 'SiO2': '', 'CaO': '', 'MgO': '', 'Al2O3': '', 'SiMa': '', });
lyr_GISVISIBlokVDM_6.set('fieldImages', {'fid': '', 'Id Blok': '', });
lyr_RuteSurveiVDM_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_171025UpdateWIUPVDM_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_161025DrillPlanVDM_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Hole ID': 'no label', 'Remarks': 'hidden field', });
lyr_171025DataSurveiVDM_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'Kode Sample': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'INC.': 'inline label - always visible', 'WEIGHT (Kg)': 'inline label - always visible', 'Ni': 'inline label - always visible', 'Co': 'inline label - always visible', 'Fe': 'inline label - always visible', 'SiO2': 'hidden field', 'CaO': 'hidden field', 'MgO': 'hidden field', 'Al2O3': 'hidden field', 'SiMa': 'inline label - always visible', });
lyr_GISVISIBlokVDM_6.set('fieldLabels', {'fid': 'hidden field', 'Id Blok': 'no label', });
lyr_GISVISIBlokVDM_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});