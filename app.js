/* jslint node: true */
"use strict";

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    zzp = require('./atelierfemkeboschker.json');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.compress());
    //app.use(express.favicon(path.join(__dirname, '/public/images/favicon.ico')));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(function (req, res) {
        res.send(404, 'four - oh - four')
    });
    app.use(function (err, req, res, next) {
        res.status(err.status || 404);
        res.send(err.message);
    });
});
//403, 500 errors


app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', function (req, res) {
    //res.redirect('/sieraden')
    var sieraden = [],
        randomSubSieraden =  [];
    for (var collectie in zzp.collecties) {
        sieraden = sieraden.concat(zzp.collecties[collectie].sieraden);
    }
    for (var i = 0; i < 10; i++) {
        randomSubSieraden.push(
            sieraden[
                Math.floor(
                    Math.random() * sieraden.length)]);
    }
    res.render('index', {
        sieraden: randomSubSieraden
    });
});

app.get('/sieraden', function (req, res) {
    var cnt = 0;
    var collectie1 = [];
    var collectie2 = [];
    for (var collectie in zzp.collecties) {

        if (cnt < 9) {
            collectie1.push(zzp.collecties[collectie]);
        } else {
            collectie2.push(zzp.collecties[collectie]);
        }
        cnt = cnt + 1;
    }
    //console.log(zzp.collecties);
    res.render('sieraden', {
        title: 'De collecties van Atelier Femke Boschker',
        url: '/sieraden',
        collecties1: collectie1,
        collecties2: collectie2
    });
});

app.get('/sieraden/:collectie', function (req, res) {

    //console.log(zzp.collecties)
    //error checking input
    var collectieNaam = req.params.collectie.replace('-', ' ');
    var collectie = zzp.collecties[collectieNaam];
    //console.log(collectie.sieraden);
    res.render('collectie', {
        title: collectieNaam,
        url: collectie.url,
        collectie: collectie
    })
});

app.get('/sieraden/:collectie/:sieraad', function (req, res) {

    //error checking input
    var collectieNaam = req.params.collectie.replace('-', ' ');
    var collectie = zzp.collecties[collectieNaam];
    var url = "/sieraden/" + req.params.collectie + "/" + req.params.sieraad
    var sieraden = collectie.sieraden
    var sieraad;
    //console.log(collectie.sieraden);
    //console.log(url);

    for (var i = 0; i < sieraden.length; i++) {
        if (sieraden[i].url == url) {
            sieraad = sieraden[i];
            break;
        }
    }

    res.render('sieraad', {
        title: sieraad.titelNl,
        url: collectie.url + sieraad.url,
        sieraad: sieraad
    })
});

app.get('/femke', function (req, res) {
    res.render('femke', {
        title: 'Het profiel en curriculum vitae van Femke Boschker',
        url: '/femke',
        image: zzp.bedrijf.ondernemer.foto
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Contact gegevens van het atelier Femke Boschker'
    });
});

app.get('/webshop', function (req, res) {
    res.render('webshop', {
        title: 'de webshops waar sieraden van atelier femke boscher te koop zijn'
    });
});

//app.get('/blog', function (req, res) {
//    res.render('blog', {
//        title: 'Het profiel en curriculum vitae van Femke Boschker',
//        url: '/femke',
//        image: zzp.bedrijf.ondernemer.foto
//    });
//});

app.get('/cursussen', function (req, res) {
    res.render('cursussen', {
        title: 'De cursussen die Femke geeft',
        url: '/femke',
        image: zzp.bedrijf.ondernemer.foto
    });
});

app.get('/galeries', function (req, res) {
    res.render('galeries', {
        title: 'de galeries waar het werk van atelier Femke Boschker te zien is',
        url: '/galeries',
        galeries: zzp.galeries
    });
});

app.get('/voorwaarden-en-intellectueel-eigendom', function (req, res) {
    res.render('voorwaarden', {
        title: 'algemene voorwaarden en intellectueel eigendom',
        url: '/femke',
        image: zzp.bedrijf.ondernemer.foto
    });
});

module.exports = app;


/*
 app.get('/', routes.index);
 app.get('/sieraden', routes.sieraden);
 app.get('/http/:name?', function (req, res, next) {
 if (req.params.name === 'remko') {
 var err = new Error('User does not exist');
 err.status = 406;
 next(err);
 } else {
 res.format({
 html: function () { res.send("<h1>hi</h1>"); },
 json: function () { res.json({message:'hi'}); },
 text: function () { res.send('hi'); }
 });
 }
 });
 app.get('/json/sieraden', function (req, res) {
 res.send(collecties.collecties[0].sieraden[0]);
 });
 app.get('/home', function (req, res){
 res.redirect(302, "/");
 });
 */

//http.createServer(app).listen(app.get('port'), function () {
//    console.log("Express server listening on port " + app.get('port'));
//});

