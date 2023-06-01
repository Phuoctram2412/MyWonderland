const menu = document.querySelector('.menu-icon');
const menuBar = document.querySelector('.menu-bar');
const bodyEl = document.querySelector('body');


const signinEl = document.getElementById('sign-in-button');
const loginformEl = document.querySelector('.login-form-hidden')
menu.addEventListener('click', function(){
    menuBar.classList.toggle('active-menu-bar')
})


function showPassword(){
    let password = document.getElementById('myInput');
    if(password.type === 'password'){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
}

