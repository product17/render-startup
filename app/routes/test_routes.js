var tpl = require('../controllers/multi_controller');

module.exports = function (app) {
  app.get('/template', tpl.multi);
}