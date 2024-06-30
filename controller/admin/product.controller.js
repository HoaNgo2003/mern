const Product = require("../../models/product.model.js")
module.exports.products = async (req, res)=>{
  let filterStatus = [
    {
      name: "tat ca",
      status:"",
      class:"active"
    },
    {
      name:"hoat dong",
      status:"active"
    },{
      name:"dung hoat dong",
      status:"inactive"
    }
  ]
  let objectPagination = {
    limit: 4,
    page: 1
  }
  console.log(req.query)
  let find = {
    deleted: false
  }
  if(req.query.status){
    const index = filterStatus.findIndex(item=>item.status===req.query.status)
    if(filterStatus[index].class!="active"){
      filterStatus[index].class="active"
      filterStatus[0].class=""
    }
    
    find.status = req.query.status

  }
  
  objectPagination.page = req.query.page
  
  if(req.query.keyword){
    const key = req.query.keyword;
    console.log(key)
    const regex = new RegExp(key, "i")
    find.title = regex
  }
  // console.log(products)
  //pagination
  
  const start = req.query.page-1
  const end = start + 4 
  const products = await Product.find(find
  ).limit(objectPagination.limit).skip((objectPagination.page-1)*objectPagination.limit)
  let productlist =products;
  const countProduct = await Product.countDocuments(find)
  const totalPage = Math.ceil(countProduct/objectPagination.limit)
  objectPagination.total = totalPage
  console.log(countProduct)
  res.render("admin/pages/products/product.pug",{
    title: "Danh sach san pham",
    product: productlist,
    filter: filterStatus,
    keyword: req.query.keyword,
    pagination: objectPagination
  }

  )

}