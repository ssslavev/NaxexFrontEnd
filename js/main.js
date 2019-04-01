import Validator from "./Validator.js";

$(function () {

    let submit = document.getElementById("send-button");
    let select = document.getElementById("select");
    let country;
    
    

    select.addEventListener('change', function() {
        country = document.getElementById("select").value;
        if(country === "BG") {
            $('#phone-code').val("+359");
        } else if(country === "US") {
            $('#phone-code').val("+1");
        } else if(country=== "GB") {
            $('#phone-code').val("+44");
        }
    })


    submit.addEventListener('click', function () {

        let fullName = document.getElementById("full-name").value;
        let email = document.getElementById("email").value;
        let phoneCode = document.getElementById("phone-code").value;
        let phoneNumber = document.getElementById("phone-number").value;
        let checkbox = document.getElementById("checkbox").checked;

        Validator.validateName(fullName);
        Validator.validateEmail(email);
        Validator.validatePhoneNumber(phoneNumber);
        Validator.validateCountry(country);
        Validator.validateCheckbox(checkbox);
        Validator.validatePhoneCode(phoneCode);

        $('.toast .toast-body').html("Everything is correct!")
            $('.toast').toast('show');



        
    })
});




