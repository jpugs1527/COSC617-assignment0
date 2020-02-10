function verifyPassword() {
    var password = document.getElementById("password").value;
    var verifyPassword = document.getElementById("confirmPassword").value;
    console.log(password,verifyPassword);
    if (password === verifyPassword) {
        return true;
    } else {
        alert("Please make sure the passwords match and try again.")
        return false;
    }
}

