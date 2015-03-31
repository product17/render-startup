var jade = require('jade')
,   async = require('async')
,   _ = require('lodash')
,   path = require('path');

var page = {
  cache: true,
  title: 'testing templates',
  data: [
    {
      _template: 'header_1',
      header: 'header test',
      body: 'content body from header_1'
    },
    {
      _template: 'content_1',
      header: 'content test',
      body: 'content body from content_1'
    },
    {
      _template: 'content_1',
      header: 'Second instance of hte content_1',
      body: 'content body fsdfgfrom content_1'
    },
    {
      _template: 'content_1',
      header: 'Third instance of conten_1',
      body: 'content body from content_1'
    }
  ]
}

module.exports.multi = function (req, res) {

  if (req.headers.accept.indexOf('application/json') >= 0) {

    // check for json requests
    res.json(page);
  } else {

    // Normal requests get the page
    var proc = _.map(page.data, function (item) {
      return function (callback) {
        var file = item._template + '.jade';
        var html = jade.renderFile(path.join(__dirname, '../', 'views/sections', file), item);
        callback(null, html);
      };
    });

    async.parallel(proc, function (err, results) {
      page.sections = results;
      res.render('template/index', page);
    });
  }
};