

// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Create an instance of express for our app and instantiate bodyParser and Cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//API URL
var api = '/api/whoami';

app.get(api, function(request, response, next){
  console.log('19080');
  
  var language;
  var software;
  var ipaddress = request.ip;
  
  response.json({
    ipaddress: ipaddress
  });
});





// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port} running`)
})
