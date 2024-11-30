document.addEventListener("DOMContentLoaded", solve);

function solve() {
    const mainEl = document.querySelector("main");

    const timesToSeconds = {seconds: 1, minutes: 60, hours: 3_600, days: 86_400};

    mainEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const changedValueName = e.target.id;
        const changedValue = e.target.querySelector('input[type="number"]').value;
        

        const changedValueToSeconds = changedValue * timesToSeconds[changedValueName];

        const multipliers = Object.values(timesToSeconds);

        updateAllTimes(changedValueToSeconds, timesToSeconds);
    });

    function updateAllTimes(timeInSeconds, timesToSeconds){
        [...document.querySelectorAll('input[type="number"]')]
            .forEach(i => {
                const type = i.id.replace('-input', '');
                console.log(type);
                i.value = (timeInSeconds / timesToSeconds[i.id.replace('-input', '')]).toFixed(2);
            });
    }
}
