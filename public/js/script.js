const buttonStatus = document.querySelectorAll("[button-active]")
if(buttonStatus.length > 0){
  let url = new URL(window.location.href)
  
  buttonStatus.forEach(item=>{
    item.addEventListener("click",()=>{
      const status = item.getAttribute("button-active")
      console.log(status)
      if(status){
        url.searchParams.set("status", status)
      }
      else
        url.searchParams.delete("status")
      window.location.href = url.href
    } )
   
  })
}
//search
const keyword = document.getElementById("keyword")
const form = document.getElementById("form-search")
if(form){
  form.addEventListener("submit", (e)=>{
    const url = new URL(window.location.href)
    e.preventDefault();
    const key = keyword.value;
    console.log(key)
    if(key){
      url.searchParams.set("keyword", key)
    }else{
      url.searchParams.delete("keyword")
    }
    window.location.href = url.href
  })
}
 //pagination
 const buttonPagination = document.querySelectorAll("[button-pagination]")
 if(buttonPagination.length > 0){
  let url = new URL(window.location.href)
  buttonPagination.forEach(item=>{
    item.addEventListener("click", ()=>{
      const page = item.getAttribute("button-pagination")
      if(page){
        url.searchParams.set("page", page)
      }
      window.location.href = url.href
    })
  })
 }
