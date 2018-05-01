// import { builtinModules } from 'module';

const mapBoxgl = require('mapbox-gl');

function addMarker(markerType, coordinates){
    let retmarker = null;
    let markerDomEl = null;
    switch( markerType){
        case 'Activity': 
            markerDomEl = markerElem('http://i.imgur.com/WbMOfMl.png');
            retmarker = new mapBoxgl.Marker( markerDomEl ).setLngLat(coordinates);
            break;
        
        case 'Hotel': 
            markerDomEl = markerElem('http://i.imgur.com/D9574Cu.png');
            retmarker = new mapBoxgl.Marker( markerDomEl ).setLngLat(coordinates);
            break;

        case 'Restaurant': 
            markerDomEl = markerElem('http://i.imgur.com/cqR6pUI.png');
            retmarker = new mapBoxgl.Marker( markerDomEl ).setLngLat(coordinates);
            break;
        
        default:  
            console.log ('Please check....');
        
    }
    return retmarker;
}

function markerElem(urlAddress){
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = urlAddress;
    return markerDomEl;
}

module.exports = addMarker;