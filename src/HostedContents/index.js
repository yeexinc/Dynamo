
var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.render("index.html");
})

app.listen(3456, function () {
  console.log('Library hosting service listening on port 3456');
})
