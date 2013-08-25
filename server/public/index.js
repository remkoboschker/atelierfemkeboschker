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
    
    // file = sieraad + ".jpg"
//     spanEls = pictureFrame.getElementsByTagName('span');
//     imgEls = pictureFrame.getElementsByTagName('img');
//     for (var i = 1; i < spanEls.length; i++) {
//         folders = spanEls[i].getAttribute('data-src').split('/')
//         folders.pop();
//         folders.push(file);
//         path = buildPath(folders);
//         console.log(path);
//         spanEls[i].setAttribute('data-src', path);
//     }
    //need to trigger picturefill to update
}

routes.path(':sieraad', show);