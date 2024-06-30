const express = require("express")
const app = express()
const databse = require("./config/database.js")
const adminroute = require("./routes/admin/index.route.js")
const pug = require("pug")
require("dotenv").config();
const port = process.env.PORT
databse.connect()
const route = require("./routes/client/index.route.js")
app.set("views", "./views")
app.set("view engine", "pug")
app.use(express.static("public"))
route(app)
adminroute(app)
app.listen(port, ()=>{
  console.log("server is running "+port)
})
// 19 26