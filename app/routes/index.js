

module.exports = function (application) {
  var app = application;
  return function (req, res, next) {
    // Load routes

    require('./test_routes')(app);
    require('./user_routes')(app);

    next();
  }
};