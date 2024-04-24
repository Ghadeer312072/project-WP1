let username = document.querySelector("#username")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let registerBtn = document.querySelector("#sign_up")

registerBtn.addEventListener("click", function (a) {
                  a.preventDefault()
                  if (username.value === "" || email.value === "" || password.value === "") {
                                    alert("please fill data")
                  } else {
                                    localStorage.setItem("username", username.value);
                                    localStorage.setItem("password", password.value);
                                    localStorage.setItem("email", email.value);
                                    setTimeout(() => {
                                                      window.location = "login.html"

                                    },1500)
                  }
})
