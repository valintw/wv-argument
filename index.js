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
    req.body.result.parameters.finalnumber ? req.body.result.parameters.finalnumber 
      : 0;
  var divisor =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.divisor ? req.body.result.parameters.divisor 
      : 1;
  
  divnum = divnum / divisor;
  
  return res.json({
    divnum: divnum,
    displayText: divnum,
    source: "willmaths"
  });
});
