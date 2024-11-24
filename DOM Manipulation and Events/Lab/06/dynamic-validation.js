document.addEventListener('DOMContentLoaded', solve);

function solve() {

    function checkValidity(e) {
        const emailRegex = /\w+@\w+\.\w+/gm;
        const currentEl = e.target;
        if(!emailRegex.test(currentEl.value)){
            currentEl.classList.add('error');
        } else {
            currentEl.classList.remove('error');
        }
    }

    const emailRegex = /\w+@\w+\.\w+/gm;

    const emailEl = document.querySelector('#email');

    emailEl.addEventListener('change', checkValidity);
}
