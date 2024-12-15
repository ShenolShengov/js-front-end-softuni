window.addEventListener("load", solve);

function solve() {
    const nextBtn = document.querySelector("#next-btn");

    nextBtn.addEventListener("click", nextEventHandler);

    function nextEventHandler(e) {
        const email = document.querySelector("#email").value;
        const event = document.querySelector("#event").value;
        const location = document.querySelector("#location").value;

        if (!email || !event || !location) return;

        const previewList = document.querySelector("#preview-list");
        addPreviewEvent({ email, event, location }, previewList);

        e.target.disabled = true;
        document.querySelector(".registerEvent").reset();
    }

    function addPreviewEvent(data, previewList) {
        const liEl = createElement(
            "li",
            { className: "application", dataset: data },
            previewList
        );
        const articleEl = document.createElement('article');
        articleEl.innerHTML = `
            <h4>${data.email}</h4>
            <p><strong>Event:</strong><br>${data.event}</p>
            <p><strong>Location:</strong><br>${data.location}</p>
        `;
        liEl.appendChild(articleEl);

        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editEventHandler);
        liEl.appendChild(editBtn);

        const doneBtn = document.createElement('button');
        doneBtn.className = 'action-btn apply';
        doneBtn.textContent = 'Apply';
        doneBtn.addEventListener('click', applyEventHandler);
        liEl.appendChild(doneBtn);
    }

    function applyEventHandler(e) {
        const eventPreviewEl = getClosestPreviewElement(e);
        Array.from(eventPreviewEl
            .querySelectorAll(".action-btn"))
            .forEach((e) => e.remove());
        enableNextBtn();
        document.querySelector("#event-list").appendChild(eventPreviewEl);
    }

    function editEventHandler(e) {
        const eventPreviewEl = getClosestPreviewElement(e);
        const data = Object.values(eventPreviewEl.dataset);

        eventPreviewEl.remove();
        enableNextBtn();

        Array.from(document
            .querySelectorAll("input"))
            .forEach((input, i) => (input.value = data[i]));
    }

    function getClosestPreviewElement(e) {
        return e.target.parentElement;
    }

    function enableNextBtn() {
        document.querySelector("#next-btn").disabled = false;
    }

    function createElement(tag, properties, parent) {
        const element = document.createElement(tag);

        Object.keys(properties).forEach((k) => {
            if (typeof properties[k] == "object") {
                Object.assign(element[k], properties[k]);
            } else {
                element[k] = properties[k];
            }
        });
        if (parent)  parent.appendChild(element);
        return element;
    }
}


// function solve() {
//     const nextButton = document.getElementById("next-btn");
//     const previewList = document.getElementById("preview-list");
//     const eventList = document.getElementById("event-list");
   
   
   
//     // Add an event listener for the [Next] button
//     nextButton.addEventListener("click", () => {
//         const email = document.querySelector("#email").value.trim();
//         const event = document.querySelector("#event").value.trim();
//         const location = document.querySelector("#location").value.trim();

//         if (!email || !event || !location) return;
   
   
//         e.target.disabled = true;
//         document.querySelector(".registerEvent").reset();
   
//         // Create a new <li> structure
//         const li = document.createElement("li");
//         li.className = "application";
   
//         const article = document.createElement("article");
//         article.innerHTML = `
//             <h4>${email}</h4>
//             <p><strong>Event:</strong><br>${event}</p>
//             <p><strong>Location:</strong><br>${location}</p>
//         `;
   
//         const editButton = document.createElement("button");
//         editButton.className = "action-btn edit";
//         editButton.textContent = "Edit";
   
//         const applyButton = document.createElement("button");
//         applyButton.className = "action-btn apply";
//         applyButton.textContent = "Apply";
   
//         li.appendChild(article);
//         li.appendChild(editButton);
//         li.appendChild(applyButton);
   
//         previewList.appendChild(li);
   
//         // Add event listeners for the [Edit] and [Apply] buttons
//         editButton.addEventListener("click", () => {
//             // Restore data to input fields
//             emailInput.value = email;
//             eventInput.value = event;
//             locationInput.value = location;
   
//             // Remove the <li> from preview list
//             li.remove();
   
//             // Enable [Next] button
//             nextButton.disabled = false;
//         });
   
//         applyButton.addEventListener("click", () => {
//             editButton.remove();
//             applyButton.remove();
//             eventList.appendChild(li);
//             nextButton.disabled = false;
//         });
//     });
//   }