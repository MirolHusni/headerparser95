

// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Used for easy parsing user-agent for response
const useragent = require('express-useragent');

//Create an instance of express for our app and instantiate bodyParser and Cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//API URL
var api = '/api/whoami';

app.get(api, function(request, response, next){
  
  var language = request.acceptsLanguages();
  var software = request.useragent;
  var ipaddress = request.ip;
  
  response.json({
    ipaddress: ipaddress,
    language: language[0],
    software: software
  });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port} running`)
})
