let productsInCart = localStorage.getItem("productsInCart")
let allproducts = document.querySelector(".products1")

let logoutBtn = document.querySelector("#logout")
logoutBtn.addEventListener("click", function () {
                  localStorage.clear();
                  setTimeout(() => {
                                    window.location = "login.html"
                  }, 1500)
})
if (productsInCart) {
                  let item = JSON.parse(productsInCart)
                  drawCartProducts(item)
}
function drawCartProducts(products) {
                  let y = products.map((item) => {
                                    return `
                  <div class="col-xl-12 product_item" price=${item.price}>
                  <img src="${item.imageURL}" alt="Light pink">
                  <div class="product_item_descration">
                                                      <h2>${item.title}</h2>
                                                      <p>${item.price}$</p>
                                    </div>
                                    <div class="product_item_action">
                                    <button class="add_to_cart" onclick="removeFromCarts(${item.id})">Remove</button>
                                    </div>
                  </div>
                  `
                  })
                  allproducts.innerHTML = y;
}

let cart =JSON.parse(productsInCart) 
function removeFromCarts(productsid){
    let index=cart.findIndex(item =>item.id === productsid)
    if (index !== -1) {
        cart.splice(index, 1); // حذف المنتج من السلة
        console.log("تم حذف المنتج بنجاح!");
    } else {
        console.log("المنتج غير موجود في سلة التسوق.");
    }
    drawCartProducts(cart)

}