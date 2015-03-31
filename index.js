var express = require('express')
,   app = express()
,   path = require('path');


app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/bower', express.static(path.join(__dirname, '/bower_components')));

routes = require('./app/routes')(app)
app.use(routes);


app.get('/', function(req, res) {
  res.send('Hello World!');
});

// app.get('/template', function(req, res) {
//   res.render('template/index', {title: 'test templates'});
// });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
