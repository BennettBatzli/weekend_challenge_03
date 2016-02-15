var express = require('express');
var router = express.Router();
var path = require('path');

var multiply = function(x, y) {
  var number = x * y;
  number = number.toString();
  return number;
};

router.post('/', function(req, res) {
  var firstInput = parseFloat(req.body['first-input']);
  var secondInput = parseFloat(req.body['second-input']);
  //console.log(req.body['first-input']);
  res.send(multiply(firstInput, secondInput));
});

module.exports = router;