function verifyPassword() {
    var password = document.getElementById("password").value;
    var verifyPassword = document.getElementById("confirmPassword").value;
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
    // Grab query string from uri
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);

    // Break up the individual query parameters
    var params = queryString.split("&");
    document.open();
    document.write("<div class='container center'>");
    document.write("<h3>Data Entered</h3><br/>")
    params.forEach(element => {
        document.write(element + "<br/>");
    });
    document.write("</div>");
    document.close();

    // Apply css via jquery append
    $('head').append('<link rel="stylesheet" type="text/css" href="orderup.css">');
}
