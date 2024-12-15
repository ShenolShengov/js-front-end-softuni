document.addEventListener('DOMContentLoaded', init);

function init() {
    
    const loadBtn = document.querySelector('#load-workout');
    loadBtn.addEventListener('click', loadEventHandler);

    const addBtn = document.querySelector('#add-workout');
    addBtn.addEventListener('click', addEventHandler);

    const editBtn = document.querySelector('#edit-workout');
    editBtn.addEventListener('click', editEventHandler);

}

function editEventHandler(e){
    const id = e.target.dataset._id;
    const workout = document.querySelector('#workout').value;
    const location = document.querySelector('#location').value;
    const date = document.querySelector('#date').value;

    const data = {workout, location, date, id};

    const url = 'http://localhost:3030/jsonstore/workout/' + id;
    console.log(data);
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
    .then(loadEventHandler);

    deactivatedEditBtn();
    activateAddBtn();
    clearInputsFileds();
    
}

function addEventHandler() {
    const url = 'http://localhost:3030/jsonstore/workout';
    const workout = document.querySelector('#workout').value;
    const location = document.querySelector('#location').value;
    const date = document.querySelector('#date').value;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({workout, location, date})
    })
    .then(loadEventHandler);
    clearInputsFileds();
}

function clearInputsFileds(){
    document.querySelector('form').reset();
}

function loadEventHandler() {
    console.log('load');
    const url = 'http://localhost:3030/jsonstore/workout';

    fetch(url)
        .then(r => r.json())
        .then(loadWorkouts);
    deactivatedEditBtn();
}

function loadWorkouts(data){
    const listEl = document.querySelector('#list')
    listEl.innerHTML = '';

    Object.values(data).forEach(workoutData => createWorkoutEl(workoutData, listEl));
}

function deactivatedEditBtn() {
    document.querySelector('#edit-workout').disabled = true;
}

function activateEditBtn(){
    document.querySelector('#edit-workout').disabled = false;   
}

function deactivatedAddBtn() {
    document.querySelector('#add-workout').disabled = true;
}

function activateAddBtn() {
    document.querySelector('#add-workout').disabled = false;
}


function createWorkoutEl(data, listEl){
    console.log(data, data.location);
    const container = createElement('div', {className: 'container', dataset: data}, listEl);
    createElement('h2', {textContent: data.workout}, container);
    createElement('h3', {textContent: data.date}, container);
    createElement('h3', {textContent: data.location, id: 'location'}, container);
    const buttons = createElement('div', {className: 'buttons-container'}, container);
    createElement('button', {className: 'change-btn', textContent: 'Change', onclick: changeEventHandler}, buttons);
    createElement('button', {className: 'delete-btn', textContent: 'Done', onclick: doneEventHandler}, buttons);
}

function doneEventHandler(e){
    const id = e.target.closest('.container').dataset._id;
    const url = 'http://localhost:3030/jsonstore/workout/' + id;
    fetch(url,{
        method: 'DELETE'
    })
    .then(loadEventHandler);
}

function changeEventHandler(e){
    const containerEl = e.target.closest('.container');
    const values = Object.values(containerEl.dataset);
    [...document.querySelectorAll('input')].forEach((input, i) => input.value = values[i]);
    deactivatedAddBtn();
    activateEditBtn();
    document.querySelector('#edit-workout').dataset._id = containerEl.dataset._id;
}

function createElement(tag, properties, parent){
    const element = document.createElement(tag);

    Object.keys(properties).forEach(k => {
        if(typeof properties[k] == 'object'){
            Object.assign(element[k], properties[k]);
        } else {
            element[k] = properties[k];
        }
    });
    if(parent) parent.appendChild(element);
    return element;
}