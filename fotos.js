/*jslint node:true */
'use strict';
var eayimage = require('easyimage'),
    imagemin = require('image-min'),
    fs = require('fs'),
    path = require('path');

fs.readdir('./public/images/640', function (err, files) {
    files.forEach(function (file) {
        fs.createReadStream(file)
            .pipe(imagemin({ext: 'jpg'}))
            .pipe(fs.createWriteStream('./dist/public/images/640/' + file));
    });
});