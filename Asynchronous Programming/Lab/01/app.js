function getInfo() {
    const stopIdEl = document.querySelector("#stopId");
    const stopId = stopIdEl.value;

    const stopNameEl = document.querySelector("#stopName");
    const busesUl = document.querySelector("#buses");

    busesUl.innerHTML = '';

    if (!stopId) return;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then(validateResponse)
        .then(showStopData)
        .catch(showErrorMessage);

    function validateResponse(res) {
        if (res.status == 200) return res.json();
        throw new Error("Error");
    }

    function showStopData(data){
        stopNameEl.textContent = data.name;
        console.log(data.buses);
        Object.entries(data.buses).map(parsBus).forEach(e => busesUl.appendChild(e));
    }

    function showErrorMessage(){
        stopNameEl.textContent = 'Error';
    }

    function parsBus(busData){
        console.log(busData);
        const [number, time] = busData;
        console.log(number, time);
        const liEl = document.createElement('li');
        liEl.textContent = `Bus ${number} arrives in ${time} minutes`;
        return liEl;
    }
}
