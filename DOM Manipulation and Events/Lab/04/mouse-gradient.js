function attachGradientEvents() {
    const gradient = document.querySelector('#gradient');

    function showPercentage(e) {
        const percentage  = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        document.querySelector('#result').textContent = `${percentage}%`;
    }

    gradient.addEventListener('mousemove', showPercentage);

}
