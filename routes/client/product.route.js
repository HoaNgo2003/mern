const express = require("express")
const route = express.Router()
const productController = require("../../controller/product.controller.js")
route.get("/",productController.index)

route.get("/create", (req, res)=>{
  res.render("client/pages/products/index")
})


route.get("/edit", (req, res)=>{
  res.render("client/pages/products/index")
})
module.exports = route