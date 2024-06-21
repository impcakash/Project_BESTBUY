function signin(e) {
    e.preventDefault();
    let div = document.getElementById("signinbox")

    let myForm = document.getElementById("myForm");
    let email = myForm.email.value;
    let password = myForm.password.value;

    let all_users = JSON.parse(localStorage.getItem("users"));

    all_users.forEach(function (user) {
        if (email === user.email && password === user.password) {
            alert("Login Succesfull");
            window.location.href = "homepage.html";
        } else {
            alert("Incorrect Credential!")
        }

    });
}