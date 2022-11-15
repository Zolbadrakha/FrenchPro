const express = require("express");
const route = new express.Router();
const { get } = require('./handler')

route.get('/', get);

module.exports = route;