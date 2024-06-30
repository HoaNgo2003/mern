const express = require("express")
const route = express.Router()
const adminController = require("../../controller/admin/dashboard.controller.js")
const productController = require("../../controller/admin/product.controller.js")
route.get("/", adminController.dashboard)
route.get("/products", productController.products)
module.exports = route