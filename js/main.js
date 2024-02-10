let btnSubmit = document.querySelector('#btn-submit');
let form = document.querySelector('form');
let repaetPassword = document.querySelector('.repaet-password');
let successful = document.querySelector('.successful');
let eyes = document.querySelectorAll('.eye');
let input = document.querySelectorAll('input');

function baseUrl() {
    return "http://10.0.102.131:8000/api/users/";
}

const resultData = (response) => {
    console.log(response)
    if (response.status === 200 || response.status === 201) {
        form.style.display = 'none';
        successful.style.display = 'block';
    } else if (response.status === 400) {
        alert("Xatolik");
    }
}

const postData = async (url, formdata) => {
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formdata,
    };

    fetch(url, requestOptions)
        .then(response => response)
        .then(result => resultData(result))
        .catch(error => console.log('error', error));
}

eyes.forEach((eye, index) => {
    let password = document.querySelectorAll('.password');

    eye.addEventListener("click", (e) => {
            if (password[index].getAttribute('type') !== "password") {
                e.target.classList.remove("view-off")
                password[index].setAttribute('type', 'password');
            } else {
                e.target.classList.add("view-off")
                password[index].setAttribute('type', 'text');
            }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {
        "username": form.username.value,
        "password": form.password.value,
        "password_confirm": form.password_confirm.value,
    };
    if (validate()) {
        postData(baseUrl(), JSON.stringify(data));
    }

})
function validate() {
    let validated = false;
    // if (form.username.value === '') {
    //     alert('Ismingizni kiriting!')
    // } else if (form.password.value === '') {
    //     alert('Parol kiriting!')
    // } else if (form.password.value.length < 8) {
    //     alert("Eng kamida 8 belgi bo'lishishi shart")
    // } else if (form.password.value === '') {
    //     alert('Parolni qayta kiriting!')
    // } else if (form.password.value === form.password_confirm.value) {
    //     return true;
    // } else {
    //     alert('Parol mos emas!')
    // }
    return validated;
}
