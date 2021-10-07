const loginForm = document.querySelector('.login-form');
const allValue = {};
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value == "" || password.value == "") {
        alert('Все поля должны быть заполнены.');
    } else {        
        allValue.email = email.value;
        allValue.password = password.value;
        console.log(allValue)
        loginForm.reset();
    }    
})