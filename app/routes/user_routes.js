var controller = require('../controllers/user_controller');

module.exports = function (app) {
  app.get('/users', controller.list);

  // Create new user
  app.get('/users/new', controller.signupForm);
  app.post('/users/new', controller.create);

  app.get('/users/:id', controller.get);

}