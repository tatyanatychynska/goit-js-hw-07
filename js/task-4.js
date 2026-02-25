const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    
    const emailVal = form.elements.email.value.trim();
    const passwordVal = form.elements.password.value.trim();
    if (emailVal ==='' || passwordVal === '') {
        alert('All form fields must be filled in');
        return;
    } 
        const obj = {
            email: emailVal,
            password: passwordVal,
        };

        console.log(obj);
    form.reset();
})