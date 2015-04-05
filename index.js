var express = require('express')
,   app = express()
,   path = require('path')
,   mongoose = require('mongoose')
,   bodyParser = require('body-parser');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/templates');

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({
  extended: false
}));

// Static links
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/bower', express.static(path.join(__dirname, '/bower_components')));


var routes = require('./app/routes')(app);
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
