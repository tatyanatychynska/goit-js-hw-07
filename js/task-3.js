const userName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

userName.addEventListener('input', listenNameInput);

function listenNameInput() {
    const value = userName.value.trim();
    if (value === '') {
        nameOutput.textContent = 'Anonymous';
    } else {

        nameOutput.textContent = value;
    }

};
