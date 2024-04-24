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
                                    window.location = "login.html"
                  }, 1500)
})