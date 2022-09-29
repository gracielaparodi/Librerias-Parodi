function validateForm() {

    let data = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
    let formData = {
        "username": document.getElementById("username").value,
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
        "confirmpassword": document.getElementById("confirmPassword").value
    }
    data.push(formData);
    if (localStorage) {
        localStorage.setItem("details", JSON.stringify(data));
    }
}
