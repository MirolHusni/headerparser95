

// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = module.exports = express();
app.use(bod



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
