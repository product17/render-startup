var express = require('express')
,   app = express()
,   path = require('path');


app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
