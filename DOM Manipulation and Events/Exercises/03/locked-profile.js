document.addEventListener("DOMContentLoaded", solve);

function solve() {
    const mainEl = document.querySelector("main");
    mainEl.addEventListener("click", profileActionHandler);

    function profileActionHandler(e) {
        
        const profile = e.target.closest('.profile');
        const hiddenFields = profile.querySelector(".hidden-fields");
        
        if(e.target.matches('input[name$="Locked"]')){
            e.currentTarget.querySelector('.hidden-fields').style.display = "none";
            e.currentTarget.querySelector("button").textContent = "Show more";
            return;
        }

        const isLocked =profile.querySelector('input[id$="Lock"]:checked') != undefined;

        if(e.target.matches('button') && !isLocked) toggleHidenFields(e, hiddenFields);;
    }

    function toggleHidenFields(e, hiddenFields){
        console.log('toggle');
        let buttonState = e.target.textContent;
        if (buttonState == "Show more") {
            hiddenFields.style.display = "block";
            buttonState = 'Show less';
        } else {
            hiddenFields.style.display = "none";
            buttonState = 'Show more';
        }
        e.target.textContent = buttonState ;
    }
}
