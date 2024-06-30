const dashboardRoute = require("../../routes/admin/dashboard.route.js")
const sysConfig = require("../../config/system.js")
module.exports = (app)=>{
  const PATH_ADMIN = sysConfig.prefixAdmin;
  app.use(PATH_ADMIN, dashboardRoute)
}