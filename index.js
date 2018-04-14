"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/div", function(req, res) {
  var divnum =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.number ? req.body.result.parameters.number 
      : 0;
  var divisor =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.divisor ? req.body.result.parameters.divisor 
      : 1;
  
  var speech= "The number you orginially thought of was "+ (divnum / divisor);
  
  return res.json({
    speech: speech,
    displayText: speech,
    source: "willmaths"
  });
});
