document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('registration-form');
  var msg = document.getElementById('form-messages');

  var namePattern = /^[A-Za-z]{3,6}$/;
  var mobilePattern = /^\d{10}$/;
  var emailPattern = /^\S+@\S+\.\S+$/;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.style.color = 'red';
    msg.innerHTML = '';

    var firstName = document.getElementById('first-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var password = document.getElementById('password').value;

    var errors = [];

    if (firstName === '') errors.push('first name is required.');
    if (email === '') errors.push('email is required.');
    if (mobile === '') errors.push('mobile is required.');
    if (password === '') errors.push('password is required.');

    if (firstName !== '' && !namePattern.test(firstName)) {
      errors.push('first name must be letters only and 3 to 6 characters.');
    }

    if (mobile !== '' && !mobilePattern.test(mobile)) {
      errors.push('mobile must be exactly 10 digits.');
    }

    if (email !== '' && !emailPattern.test(email)) {
      errors.push('please enter a valid email.');
    }

    if (errors.length > 0) {
      msg.innerHTML = errors.join('<br>');
      return;
    }

    msg.style.color = 'green';
    msg.textContent = 'form submitted successfully. check console for data.';

    var data = {
      firstName: firstName,
      lastName: document.getElementById('last-name').value.trim(),
      email: email,
      mobile: mobile,
      dob: document.getElementById('dob').value,
      address: document.getElementById('address').value.trim(),
      city: document.getElementById('city').value.trim(),
      pin: document.getElementById('pin').value.trim(),
      state: document.getElementById('state').value.trim(),
      qualification: document.getElementById('qualification').value,
      specialization: Array.from(
        document.querySelectorAll('input[name="specs"]:checked')
      ).map(function (c) {
        return c.value;
      }),
      gender: (document.querySelector('input[name="gender"]:checked') || { value: '' }).value
    };

    console.log('Form Data:', data);
    console.log('Password:', password);
  });

  document.getElementById('mobile').addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
  });

  document.getElementById('first-name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-z]/g, '').slice(0, 6);
  });
});
