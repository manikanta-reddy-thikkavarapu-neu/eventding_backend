let validator = {};

//to validate user full name
validator.validateFirstName = function (name) {
    if(name == ""){
        let err = new Error('Please enter the First name.');
        err.status = 400;
        throw err;
    }
    let check = String(name).match( /^[a-zA-Z]+[a-zA-Z ]*$/ )
    if (!check) {
        let err = new Error('Not a valid first Name. First Name should contain only alphabets and space.');
        err.status = 400;
        throw err;
    }
}

validator.validateLastName = function (name) {
    if(name == ""){
        let err = new Error('Please enter the Last name.');
        err.status = 400;
        throw err;
    }
    let check = String(name).match( /^[a-zA-Z]+[a-zA-Z ]*$/ )
    if (!check) {
        let err = new Error('Not a valid Last name. Last name should contain only alphabets and space.');
        err.status = 400;
        throw err;
    }
}

//to validate email
validator.validateEmail = function (email) {
    if(email == ""){
        let err = new Error('Please enter the email.');
        err.status = 400;
        throw err;
    }
    let check = String(email).match( /^([a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?)$/ )
    if (!check) {
        let err = new Error('Not a valid email.');
        err.status = 400;
        throw err;
    }
}

//to validate password
validator.validatePassword = function (password) {
    if(password == ""){
        let err = new Error('Please enter the password.');
        err.status = 400;
        throw err;
    }
    let check = String(password).match( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/ )
    if (!check) {
        let err = new Error('Not a valid password. Password should contain atleast one lowercase letter, uppercase letter, digit and special character having length between 8 and 20.');
        err.status = 400;
        throw err;
    }
}

module.exports = validator;