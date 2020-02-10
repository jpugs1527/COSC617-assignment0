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

function populateDelivery() {
    var checkBox = document.getElementById("populate");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    if(checkBox.checked) {
        // populate the fieldset
        document.getElementById("delAddFirstName").value = firstName;
        document.getElementById("delAddLastName").value = lastName;
        document.getElementById("delAddAddress").value = address;
        document.getElementById("delAddCity").value = city;
        document.getElementById("delAddState").value = state;
    }
}

function getResults() {
    var form = $('#orderForm').serializeArray();
    var html = "";
    form.forEach(element => {
        html += "<p>" + element.name + " - " + element.value + "</p><br/>";
    });
    console.log(html);
    document.write(html);
}
