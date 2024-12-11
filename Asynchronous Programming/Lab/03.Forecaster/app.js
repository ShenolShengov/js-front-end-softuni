function attachEvents() {
   
    const getWeatherBtn = document.querySelector('#submit');

    getWeatherBtn.addEventListener('click', handleWeatherEvent);


}

function handleWeatherEvent(e){
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const locationInput = document.querySelector('#location');
    const location = locationInput.value;

    fetch(url)
        .then(r => r.json())
        .then(data => processWeatherRequest(data, location));

    locationInput.value = '';
}

function processWeatherRequest(data, location){
    const code = data.find(e => e.name == location)?.code;
    
    const forecastEl = document.querySelector('#forecast');
    forecastEl.style.display = 'block';

    if(!code){
        showErrorMesage(forecastEl);
        return;
    }


    const weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☔;'
    };

    const todayWeatherUrl = 'http://localhost:3030/jsonstore/forecaster/today/' + code;



    fetch(todayWeatherUrl)
        .then(r => r.json())
        .then(data => showTodayWeather(data, weatherSymbols))

    const upcomingUrl = todayWeatherUrl.replace('today', 'upcoming');

    fetch(upcomingUrl)
        .then(r => r.json())
        .then(data => showUpcomingWeather(data, weatherSymbols));

}

function showErrorMesage(forecastEl){
    createElement('div', {className: 'label', textContent: 'Error!'}, forecastEl);
}

function showTodayWeather(data, weatherSymbols){
    const currentWeatherEl = document.querySelector('#current');
    const forecastsEl = createElement('div', {className: 'forecasts'}, currentWeatherEl);
    const weatherSymbol = weatherSymbols[data.forecast.condition];
    createElement('span', {className: 'condition symbol', textContent: weatherSymbol}, forecastsEl);
    const conditionEl = createElement('div', {className: 'condition'}, forecastsEl);
    createElement('span', {className: 'forecast-data', textContent: data.name}, conditionEl);
    const degreeText = `${data.forecast.low}°/${data.forecast.high}°`;
    createElement('span', {className: 'forecast-data', textContent: degreeText}, conditionEl);
    createElement('span', {className: 'forecast-data', textContent: data.forecast.condition}, conditionEl);
}

function showUpcomingWeather(data, weatherSymbols){
    const upcomingEl = document.querySelector('#upcoming');

    const infoEl = createElement('div', {className: 'forecast-info'}, upcomingEl);

    data.forecast.forEach(dayData => {
        const upcomingInnerEl = createElement('span', {className: 'upcoming'}, infoEl);
        const weatherSymbol = weatherSymbols[dayData.condition];
        createElement('span', {className: 'symbol', textContent: weatherSymbol}, upcomingInnerEl);
        const degreeText = `${dayData.low}°/${dayData.high}°`;
        createElement('span', {className: 'forecast-data', textContent: degreeText}, upcomingInnerEl);
        createElement('span', {className: 'forecast-data', textContent: dayData.condition}, upcomingInnerEl);
    });
}

function createElement(tag, properties, parent){
    const el = Object.assign(document.createElement(tag), properties);
    if(parent) parent.appendChild(el);
    return el;
}


attachEvents();
