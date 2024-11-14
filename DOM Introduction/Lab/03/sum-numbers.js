function calc() {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    const sumInput = document.querySelector('#sum');
    sumInput.value = num1 + num2;
}