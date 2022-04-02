function Login() {
    var username = document.getElementById("username").value
    username = username.toLowerCase()

    var password = document.getElementById("password").value
    password = password.toLowerCase()

    if (username == "gabriel" && password == "123") {
        location=('acesso.html')
    }
}

