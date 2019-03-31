import Validator from "./Validator.js";

$(function () {

    let submit = document.getElementById("send-button");


    submit.addEventListener('click', function () {

        let fullName = document.getElementById("full-name").value;
        let email = document.getElementById("email").value;
        let phoneCode = document.getElementById("phone-code").value;
        let phoneNumber = document.getElementById("phone-number").value;
        let country = document.getElementById("select").value;

        Validator.validateName(fullName);
        Validator.validateEmail(email);

        
    })
});




