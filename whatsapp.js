var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://api.whatsapp.com/send', {
  title: 'text'
});

module.exports = shareFactory(href);
