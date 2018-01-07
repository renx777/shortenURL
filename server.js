// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// using tinyurl module to shorten the urls
var TinyURL=require('tinyurl')


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get('/new/:url', function (req, res) {

    TinyURL.shorten("https://" + req.params.url,function(resp){
        var output={longURL:req.params.url,shortURL:resp}
        res.send(output)
    } );


});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
