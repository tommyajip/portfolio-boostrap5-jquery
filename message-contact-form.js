// Web app untuk menampung isi message dari contact form
// Referensi: https://github.com/jamiewilson/form-to-google-sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxFAJ345rGXjh3gRLpH3aXtPNxHguT2_2IwP4rokQAyRTREW-2MpGMWGUZbEPxUS8Fc/exec'
const form = document.forms['message-contact-form'];
const btnSend = document.querySelector('#btn-send');
const btnLoading = document.querySelector('#btn-loading');
const myAlert = document.querySelector('#alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol send message
    btnLoading.classList.toggle('d-none');
    btnSend.classList.toggle('d-none');
    // The Fetch API interface allows web browser to make HTTP requests to web servers
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // tampilkan tombol send message, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnSend.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset message-contact-form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})