// form validation using javascript

const form = document.getElementById('form');
//const firstName = document.getElementById('firstName');
//const lastName = document.getElementById('lastName');
//const email = document.getElementById('email');
//const phone = document.getElementById('phone');
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {
    
    let messages = [];
   
    if (password.value.length <= 6) {
        messages.push('* Password must be longer than 6 characters');
    }
    if (password.value.length >= 20) {
        messages.push('* Password must be less than 20 characters');
    }
    if (password.value != confirmPassword.value) {
        messages.push('* Passwords do not match')
    }
    
    //prevents page from submitting if there are errors
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('\n');
    }
})