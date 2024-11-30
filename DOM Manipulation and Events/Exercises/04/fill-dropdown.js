document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    const formInput = document.querySelector('form');

    formInput.addEventListener('submit', addOptionToMenu);

    function addOptionToMenu(e){
        e.preventDefault();

        const itemText = document.querySelector('#newItemText').value;   
        const itemValue = document.querySelector('#newItemValue').value; 

        if(!itemText || !itemValue) return;

        const menu = document.querySelector('#menu');
        const optionEl = document.createElement('option');
        optionEl.textContent = itemText;
        optionEl.value = itemValue;
        menu.appendChild(optionEl);
        e.currentTarget.reset();
        document.querySelector('#newItemText').focus();
    }
}