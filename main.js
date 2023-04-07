const myForm = document.querySelector('#my-form');

const firstName = document.querySelector('#FirstName');
const firstError = document.querySelector('#fn-error');

const lastName = document.querySelector('#LastName');
const lastError = document.querySelector('#ln-error');

const email = document.querySelector('#Email');
const emailError = document.querySelector('#email-error');

const password = document.querySelector('#Password');
const pwError = document.querySelector('#pw-error');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (firstName.value === '') {
        firstError.classList.add('error-msg');
        firstError.innerHTML = 'First Name cannot be empty';
    };
    if (lastName.value === '') {
        lastError.classList.add('error-msg');
        lastError.innerHTML = 'Last Name cannot be empty';
    };
    if (email.value === '') {
        emailError.classList.add('error-msg');
        emailError.innerHTML = 'Looks like this is not an email';
    };
    if (password.value === '') {
        pwError.classList.add('error-msg');
        pwError.innerHTML = 'Password cannot be empty';
    };

}


