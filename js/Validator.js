const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_NUMBER = /^0\d{4,5}$/;

export default class Validator {



    static validateName(fullName) {

        $(function () {
            if (fullName === '') {
                $('.toast .toast-body').html("Full name can not be empty!")
                $('.toast').toast('show');
                throw('Name is empty!');
            } else if (fullName.length < 3 || fullName.length > 20) {
                $('.toast .toast-body').html("Username must be between 3 and 20 characters!")
                $('.toast').toast('show');
                throw('Username must be between 3 and 20 characters!');
            } else if (!(fullName.trim().indexOf(' ') != -1)) {
                $('.toast .toast-body').html("The names must be two!")
                $('.toast').toast('show');
                throw('The names must be two!');
            }
        });


    }

    static validateEmail(email) {
        if (email === '') {
            $('.toast .toast-body').html("Email is required!")
            $('.toast').toast('show');
            throw('Email is required!');
        } else if  (!email.match(EMAIL_REGEX)) {
            $('.toast .toast-body').html("Email is not valid!")
            $('.toast').toast('show');
            throw('Email is not valid!');
        }
    }

    static validatePhoneCode(phoneCode) {
        if(phoneCode==='') {
            $('.toast .toast-body').html("Phone code is required!")
            $('.toast').toast('show');
            throw('Phone code is required!');
            
        } else {
            phoneCode = phoneCode.trim();
            
        }
    }

    static validatePhoneNumber(phoneNumber) {
        if(phoneNumber==='') {
            $('.toast .toast-body').html("Phone number is required!")
            $('.toast').toast('show');
            throw('Phone number is required!');
        } else if(isNaN(phoneNumber)) {
            $('.toast .toast-body').html("Phone number can include just digits!")
            $('.toast').toast('show');
            throw('Phone number can include just digits');
        } else if(phoneNumber[0]!=0) {
            $('.toast .toast-body').html("Firs digit must be 0!")
            $('.toast').toast('show');
            throw('Firs digit must be 0!');
        } else if (phoneNumber.length<5) {
            $('.toast .toast-body').html("Phone number must be minimum 5 digits!")
            $('.toast').toast('show');
            throw('Phone number must be minimum 5 digits!');
        }

        


    }

    static validateCountry(country) {
            if(country==='') {
                $('.toast .toast-body').html("Country is required!")
                $('.toast').toast('show');
                throw('Country is required!');
            }

    }

    static validateCheckbox(value) {
        if(!value) {
            $('.toast .toast-body').html("You have to accept Terms and Conditions!")
            $('.toast').toast('show');
            throw('You have to accept Terms and Conditions!');
        }
    }

}