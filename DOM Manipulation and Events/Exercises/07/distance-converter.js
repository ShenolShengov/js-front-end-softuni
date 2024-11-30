document.addEventListener('DOMContentLoaded', solve);

function solve() {
   
    const convertBtn = document.querySelector('#convert');

    const unitsToMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtn.addEventListener('click', convert);


    function convert(e) {

        
        const fromUnit = document.querySelector('#inputUnits').value;
        const toUnit = document.querySelector('#outputUnits').value;
        
        const distanceToMeters = Number(document.querySelector('#inputDistance').value) * unitsToMeters[fromUnit];

        console.log(distanceToMeters);

        const distanceToUnit = distanceToMeters / unitsToMeters[toUnit];

        document.querySelector('#outputDistance').value = distanceToUnit;
        
    }

}