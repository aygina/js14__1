const result = document.querySelector('#result');

function showMessage() {
    let userNameInput =
    document.getElementById('userName');
    result.innerHTML = (`Привет, ${userNameInput.value}!`);
}
