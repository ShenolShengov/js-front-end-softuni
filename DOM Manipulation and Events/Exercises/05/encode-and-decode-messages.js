document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    const encodeForm = document.querySelector('#encode');
    const decodeForm = document.querySelector('#decode');

    encodeForm.addEventListener('submit', encode);
    decodeForm.addEventListener('submit', decode);

    function encode(e) {
        e.preventDefault();
        const messageInput = document.querySelector('#encode textarea');
        const message = messageInput.value;
        const receiver = document.querySelector('#decode textarea');
        receiver.value = encodeMessage(message);
        messageInput.value = '';
    }

    function encodeMessage(message) {
        return [...message].map(e => charFrom(e, 1)).join('');
    }

    function decode(e){
        e.preventDefault();
        const messageInput = document.querySelector('#decode textarea');
        const message = messageInput.value;
        messageInput.value = decodeMessage(message);
    }

    function decodeMessage(message){
        return [...message].map(e => charFrom(e, -1)).join('');
    }

    function charFrom(base, toAdd){
        return String.fromCharCode(base.charCodeAt(0) + toAdd);
    }
}