var pic = require('scottjehl-picturefill/picturefill.js');
var route66 = require('pazguille-route66/index.js');
var routes = new route66();
var getByClass = require('get-by-class');
var classes = require('classes');

function buildPath (folders) {
    var path = "";
    for (var i = 1; i < folders.length; i++){
        path = path + "/" + folders[i];
    }
    return path;
}

function show (sieraad) {
    var pictureFrame, file, spanEls, imgEls, folders, path, visiblePicture, currentPicture;
    pictureFrame = document.getElementById('pictureFrame');
    visiblePicture = getByClass(pictureFrame, 'visible', true);
    classes(visiblePicture).remove('visible').add('hidden');
    currentPicture = pictureFrame.children.namedItem(sieraad);
    classes(currentPicture).remove('hidden').add('visible');
    
}

routes.path(':sieraad', show);