var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://www.facebook.com/sharer.php', {
  url: 'u'
});

module.exports = _shareFactory(href, 670, 340);
