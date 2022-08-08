// Creating the user details
const user = {
    name : "AdamboJnr",
    password : "Adambo12",
    email : "AdamboAllan75@gmail.com"
};

// Picking the user inputs from the form
const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// Event listener check whether form is valid before submitting
form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

// Function to check for errors in any of the inputs in the form
function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

// Function to validate form inputs
function validateForm() {
    // Validating the username input
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    }else if(usernameInput.value.trim() != user.name){
        setError(usernameInput,'Username input does not match');
    }else {
        setSuccess(usernameInput);
    }
    // Validating the email input
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value) && emailInput.value.trim() === user.email){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Email input does not Match');
    }

    // Validating the password input
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password can not be empty');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 charecters');
    }else if(passwordInput.value.trim() === user.password){
        setSuccess(passwordInput);
    }else{
        setError(passwordInput, 'Password input does not match');
    }
    // Validate if the passwords match
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Password can not be empty');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, "Passwords don't match");
    }else {
        setSuccess(confirmPasswordInput);
    }
}

/* Function to assign error class in css in case of error in an input
    Also Display the error message */
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

/* Function to assign success class in css in case of correct input
    Also Display the error message */
function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

// Function to validate if email provided is valid
function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}



