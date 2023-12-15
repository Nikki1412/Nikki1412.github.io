const scriptURL = 'https://script.google.com/macros/s/AKfycbzt3uq7ctqI5rJQdMIeBfnE96LlQFs5ZlnY5kM_uSHpZWlU4a4aH9piGbBod06SeePAAg/exec';
const form = document.forms['nikki-contact-form'];

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    //ketika tombol submit di-klik
    //Munculkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');


    fetch(scriptURL, { method: 'POST', body: new FormData(form) })

        .then(response => {
            console.log('Success!', response)
            //jika pesan sudah terkirim
            //Munculkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            //Munculkan Alert
            myAlert.classList.toggle('d-none');

            //Reset Form
            form.reset();
        })


        .catch(error => console.error('Error!', error.message))
});
