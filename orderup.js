function verifyPassword (password, verifyPassword) {
    if (password === verifyPassword) {
        return true;
    } else {
        alert("Please make sure the passwords match and try again.")
        return false;
    }
}