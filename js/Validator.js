const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Validator {



    static validateName(fullName) {

        $(function () {
            if (fullName === '') {
                $('.toast .toast-body').html("Full name can not be empty!")
                $('.toast').toast('show');
            } else if (fullName.length < 3 || fullName.length > 20) {
                $('.toast .toast-body').html("Username must be between 3 and 20 characters!")
                $('.toast').toast('show');
            } else if (!(fullName.trim().indexOf(' ') != -1)) {
                $('.toast .toast-body').html("The names must be two!")
                $('.toast').toast('show');
            }
        });


    }

    static validateEmail(email) {
        if (email === '') {
            $('.toast .toast-body').html("Email is required!")
            $('.toast').toast('show');
        } else if  (!email.match(EMAIL_REGEX)) {
            $('.toast .toast-body').html("Email is not valid!")
            $('.toast').toast('show');
        }
    }

}