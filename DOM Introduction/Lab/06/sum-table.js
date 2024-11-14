function sumTable() {
    const costs = [...document.querySelectorAll("tbody tr td:last-child:not(#sum)"),]
        .map((e) => Number(e.textContent))
        .reduce((acc, c) => acc + c);
    const sumElement = document.querySelector('#sum');
    sumElement.textContent = costs;
}
