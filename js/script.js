//get the form elements.
const name = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const phoneRegEx = new RegExp(/^[0-9]g/);
const password = document.getElementById('password');
const passwordRegEx = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
);
console.log('name', name);
name.addEventListener('change', function () {
  if (name.value.length < 5) {
    alert('the name must be at least 5 characters');
    name.setAttribute('class', 'form-control is-invalid');
    name.focus();
  }
});
email.addEventListener('change', function () {
  if (!email.value.includes('@')) {
    alert('this field should be a valid email');
    email.setAttribute('class', 'form-control is-invalid');
    email.focus();
  }
});
password.addEventListener('change', function () {
  if (!passwordRegEx.test(password.value)) {
    alert('password should contain digits letter and at least 6 characters');
    password.setAttribute('class', 'form-control is-invalid');
    password.focus();
  }
});
phoneNumber.addEventListener('change', function () {
  if (phoneNumber.value.length < 8) {
    alert('the phone number should contain 8 digits');
    phoneNumber.setAttribute('class', 'form-control is-invalid');
    phoneNumber.focus();
  }
  if (!phoneRegEx.test(phoneNumber.value)) {
    alert('the phone number should contain only number');
    phoneNumber.setAttribute('class', 'form-control is-invalid');
    phoneNumber.focus();
  }
});
