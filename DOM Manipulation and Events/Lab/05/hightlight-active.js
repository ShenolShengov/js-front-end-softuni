document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputs = document.querySelectorAll('input[type="text"]');

    [...inputs].forEach(e => {
        e.addEventListener('focus', addFocus);
        e.addEventListener('blur', removeFocus);
    });

    function addFocus(e) {
        e.target.parentElement.classList.add('focused');
    }

    function removeFocus(e) {
        e.target.parentElement.classList.remove('focused');
    }
}