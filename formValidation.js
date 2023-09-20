function myFunction() {
    var inputs = document.getElementById("firstname");
    if (!inputs.checkValidity()) { 
        document.getElementById("demo").innerHTML = inputs.validationMessage; 
    }
}