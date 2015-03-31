define(function (require) {
  'use strict';

  var angular = require('angular')
  ,   controllers = require('./controllers/workoutCtrl')
  ,   app = angular.module('workoutApp', []);

  app.controller('workoutCtrl', controllers);

  app.init = function () {
    angular.bootstrap(document, ['workoutApp']);
  }

  return app

});