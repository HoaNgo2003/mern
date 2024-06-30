const express = require("express")
const route = express.Router()
const homecontrol = require("../../controller/home.controller.js")
route.get("/", homecontrol.index)

 
module.exports = route