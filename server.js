var express = require('express')
var app = express()
var partials = require('express-partials');


app.configure(function() {
  app.set('port', (process.env.PORT || 5000))
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(partials());
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
  response.sendFile('/index.html')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})