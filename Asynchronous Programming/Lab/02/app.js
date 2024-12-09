function solve() {

    let stopId = 'depot';
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    const infoSpanEl = document.querySelector('.info');

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;
        departBtn.disabled = 'disabled';
        arriveBtn.removeAttribute('disabled');
        console.log(url);
        fetch(url)
            .then(r => r.json())
            .then(handleDepartRequest)
    }

    function handleDepartRequest(data) {
        console.log(data);
        infoSpanEl.textContent = `Next stop ${data.name}`;
        stopId = data.next;
    }

    async function arrive() {
        departBtn.removeAttribute('disabled');
        arriveBtn.disabled = 'disabled';
        infoSpanEl.textContent = `Arriving at ${infoSpanEl.textContent.split(' stop ')[1]}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();