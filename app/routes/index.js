

module.exports = function (application) {
  var app = application;
  return function (req, res, next) {
    // Load routes

    require('./test_routes')(app);

    next();
  }
};