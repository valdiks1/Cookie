let mail = document.querySelector('#mail');
let pass = document.querySelector('#pass');
let rep = document.querySelector('#repeat');
let signUpButton = document.querySelector('#signUp');
let wrongMail = document.querySelector('#wrongMail');
let wrongPass = document.querySelector('#wrongPass');
let wrongRep = document.querySelector('#wrongRep');

function checkForm(e){
    e.preventDefault();
    if(mail.value == ''){
        wrongMail.innerHTML="Это обязательное поле";
    }
    if(pass.value == ''){
        wrongPass.innerHTML="Это обязательное поле";
    }
    if(rep.value == ''){
        wrongRep.innerHTML="Это обязательное поле";
    }

}

signUpButton.addEventListener('click', checkForm);