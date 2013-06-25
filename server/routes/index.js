
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
      title: 'Atelier Femke Boschker',
      url: '/',
      image: {imageOf: 'sieraden/collectie/sieraad',
              src: 'images/sieraden/fragment-kleurrijk.jpg',
              alt: 'alt text',
              caption: 'een hele mooie broche van goud gemaakt'}
    });
};
exports.sieraden = function(req, res){
  res.render('sieraden', { 
      title: 'De collecties van Atelier Femke Boschker',
      url: '/sieraden'});
};