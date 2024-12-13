document.addEventListener('DOMContentLoaded', init);

function init() {

    const loadAppointmentsBtn = document.querySelector('#load-appointments');
    loadAppointmentsBtn.addEventListener('click', loadAppointmentsHandler)

    const addBtn = document.querySelector('#add-appointment');
    addBtn.addEventListener('click', addAppointmentHandler);

    const editBtn = document.querySelector('#edit-appointment');
    editBtn.addEventListener('click', editAppointmentHandler);
}

function editAppointmentHandler(e){
    const data = extractInputData();
    data._id = e.target.dataset._id;
    console.log(data);
    resetInputsData();
    updateButtonsActiveStatus(true, false);

    editAppointment(data, loadAppointmentsHandler);

}

function editAppointment(data, onSucces){
    const url = 'http://localhost:3030/jsonstore/appointments/' + data._id;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(r => {
        console.log(r);
        onSucces();
    })
    .catch(err => console.error(err));
}

function addAppointmentHandler() {

    const data = extractInputData();
    resetInputsData();
    addAppointment(data, loadAppointmentsHandler);
}

function resetInputsData(){
    document.querySelector('form').reset();
}

function addAppointment(data, onSucces){
    const url = 'http://localhost:3030/jsonstore/appointments/';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(onSucces)
    .catch(err => console.error(err));
}

function extractInputData() {
    const model = document.querySelector('#car-model').value;
    const service = document.querySelector('#car-service').value;
    const date = document.querySelector('#date').value;
    return {model, service, date};
}

function loadAppointmentsHandler() {
    const appointmentList = document.querySelector('#appointments-list');
    appointmentList.innerHTML = '';
    loadAppointments((data) => {
        console.log(Object.values(data));
        Object.values(data).forEach(appointmentData => {
            createAppointment(appointmentData, appointmentList);
        });
    });

}

function loadAppointments(onSucces){
    const url = 'http://localhost:3030/jsonstore/appointments/';
    fetch(url)
        .then(r => r.json())
        .then(onSucces)
        .catch(err => console.error(err));
}

function createAppointment(data, parent) {
    const liEl = createElement('li', {className: 'appointment', dataset: data}, parent);
    createElement('h2', {textContent: data.model}, liEl);
    createElement('h3', {textContent: data.date}, liEl);
    createElement('h3', {textContent: data.service}, liEl);

    const buttons = createElement('div', {className: 'buttons-appointment'}, liEl);
    createElement('button', {className: 'change-btn', textContent: 'Change', onclick: changeAppointemntHandler}, buttons);
    createElement('button', {className: 'delete-btn', textContent: 'Delete', onclick: deleteAppointmentHandler}, buttons);
}

function deleteAppointmentHandler(e) {
    const id =  e.target.closest('li').dataset._id;
    deleteAppointment(id, loadAppointmentsHandler)
}

function deleteAppointment(id, onSucces){
    const url = 'http://localhost:3030/jsonstore/appointments/' + id;
    fetch(url, {
        method: 'DELETE',
    })
    .then(r => r.json())
    .then(onSucces)
    .catch(err => console.error(err));
}

function changeAppointemntHandler(e){
    const data = e.target.closest('li').dataset;
    document.querySelector('#edit-appointment').dataset._id = data._id;
    const values = Object.values(data);
    [...document.querySelectorAll('input, select')]
        .forEach((input, i) => input.value = values[i]);
    updateButtonsActiveStatus(false, true);
}

function updateButtonsActiveStatus(addBtnStatus, editBtnStatus){
    document.querySelector('#add-appointment').disabled = !addBtnStatus;
    document.querySelector('#edit-appointment').disabled = !editBtnStatus;
}


function createElement(tag, properties, parent){
    const el = document.createElement(tag);
    Object.keys(properties).forEach(p => {
        if(typeof properties[p] == 'object'){
            Object.assign(el[p], properties[p]);
        } else {
            el[p] = properties[p];
        }
    });
    if(parent) parent.appendChild(el);
    return el;
}