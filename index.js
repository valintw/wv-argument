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
  return res.json({
    divnum: divnum,
    displayText: divnum,
    source: "willmaths"
  });
});
