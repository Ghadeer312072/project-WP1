let user_info = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let linkes = document.querySelector("#links")
if (localStorage.getItem("username")) {
                  linkes.remove()
                  user_info.style.display = "flex"
                  userData.innerHTML = localStorage.getItem("username")
}
let logoutBtn = document.querySelector("#logout")
logoutBtn.addEventListener("click", function () {
                  localStorage.clear();
                  setTimeout(() => {
                                    window.location = "register.html"
                  }, 1500)
})
///////////////////////////////////////////////////////////////////////
let allproducts = document.querySelector(".products")
let products = [
                  { id: 1, title: "Brown lipstick", color: "bink", price: 20, imageURL: "./images/istockphoto-147652905-1024x1024.jpg" },
                  { id: 2, title: "Red lipstick", color: "black", price: 40, imageURL: "./images/istockphoto-153539202-1024x1024.jpg" },
                  { id: 3, title: "Pink lipstick", color: "rad", price: 35, imageURL: "./images/istockphoto-187959441-1024x1024.jpg" },
                  { id: 4, title: "Light pink", color: "white", price: 25, imageURL: "./images/istockphoto-187959616-1024x1024.jpg" },
                  { id: 5, title: "Spring collection", color: "h red", price: 95, imageURL: "./images/istockphoto-496199285-1024x1024.jpg" },
                  { id: 6, title: "Matte red lipstick", color: "d pink", price: 45, imageURL: "./images/istockphoto-1125855430-1024x1024.jpg" },

]
function drawItem() {
                  let y = products.map((item) => {
                                    return `
                  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 product_item" price=${item.price}>
                                    <img src="${item.imageURL}" alt="Light pink">
                                    <div class="product_item_descration">
                                                      <h2>${item.title}</h2>
                                                      <p>${item.price}$</p>
                                    </div>
                                    <div class="product_item_action">
                                                      <button class="add_to_cart" onclick="addtocart(${item.id})">Add to cart</button>
                                                      <i class="far fa-heart fav"></i>
                                    </div>
                  </div>
                  `
                  })
                  allproducts.innerHTML = y;
}
drawItem()
//تم استخدام متغير يعبر عن مصفوفة اغراض تعبر عن المتغيرات ىالمتعلقة بكل منتج واستخدام تابع لرسم قالب المنتج لكل غرض داخل المصفوفة
let cartsproductDiv = document.querySelector(".carts_products div")
// الدف الفاضي في الفوتر الذي يظهر اسم المنتجات التي تم اختيارها
let badge = document.querySelector(".badg")// for count chossen prodacts
//السبان الفاضي الذي سوف يعد المنتجات
let addItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if (addItem) {
                  addItem.map(item => {
                  cartsproductDiv.innerHTML += `<p> ${item.title} <p>`})
                   badge.style.display = "block"
                  badge.innerHTML = addItem.length
}
if (localStorage.getItem("username")) {
                  function addtocart(id) {
                  let choosenItem = products.find((item) => item.id === id)// المنتج الذي ضغطنا عليه  يقابل ال(ايدي) الغرض  ومحتوي الغرض خزنه في المتغير 
                  cartsproductDiv.innerHTML += `<p onclick=removeparagragh(${choosenItem.id})>${choosenItem.title + " " + "," + choosenItem.price + `<span>$</span>`}</p>`;
                  addItem = [...addItem, choosenItem]
                  localStorage.setItem("productsInCart", JSON.stringify(addItem));
                  let cartproductslength = document.querySelectorAll(".carts_products div p");
                  // console.log(cartproductslength.length)
                  badge.style.display = "block"
                  badge.innerHTML = cartproductslength.length


                  }
} else {
                  window.location = "login.html"
                  // document.querySelector(".carts_products").style.display = "none"
}
let shopping_cart = document.querySelector(".shopping_cart ")
let carts_products = document.querySelector(".carts_products")
let carts_productsPut = document.querySelector(".carts_products a")
carts_productsPut.addEventListener("click", maveTochossen)
function maveTochossen() {
                  window.location = "cartsproduct.html"


}


// function addtocart(id) {
//                   let choosenItem = products.find((item) => item.id === id)// المنتج الذي ضغطنا عليه  يقابل ال(ايدي) الغرض  ومحتوي الغرض خزنه في المتغير 
//                   cartsproductDiv.innerHTML += `<p >${choosenItem.title + " " + "," + choosenItem.color + "," + " " + choosenItem.price + `<span>$</span>`}</p>`
//                   total_price.innerHTML += choosenItem.price + "+";
//                   let cartproductslength = document.querySelectorAll(".carts_products div p")
//                   //console.log(cartproductslength.length)
//                   badge.style.display = "block"
//                   badge.innerHTML = cartproductslength.length

// }
// shopping_cart.addEventListener("click", opencart)
function opencart() {
                  if (cartsproductDiv.innerHTML != "") {
                                    if (carts_products.style.display == "block") {
                                                      carts_products.style.display = "none"
                                    } else {
                                                      carts_products.style.display = "block"
                                    }
                  }
}
