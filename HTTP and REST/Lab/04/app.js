function loadCommits() {
    const usernameInput = document.querySelector("#username");
    const repoInput = document.querySelector("#repo");

    const useranme = usernameInput.value;
    const repo = repoInput.value;

    const url = `https://api.github.com/repos/${useranme}/${repo}/commits`;

    const commitsUl = document.querySelector("#commits");
    commitsUl.innerHTML = "";

    fetch(url)
        .then(validateResponse)
        .then(showCommits)
        .catch(showErorMessage);
}

function validateResponse(response) {
    if (response.ok) return response.json();
    throw new Error(`Error occuresed ${response.status}`);
}


function showCommits(data) {

    const commitsUl = document.querySelector("#commits");

    data.map(toCommitListItem).forEach((listItem) => {
        commitsUl.appendChild(listItem);
    });
}

function toCommitListItem(commitData) {
    const name = commitData.commit.author.name;
    const message = commitData.commit.message;

    const liEl = document.createElement("li");
    liEl.textContent = `${name}: ${message}`;

    return liEl;
}

function showErorMessage() {
    const commitsUl = document.querySelector("#commits");
    const errorMessage = generateErrorMessage();
    commitsUl.appendChild(errorMessage);
}

function generateErrorMessage() {
    const messageEl = document.createElement("li");
    messageEl.textContent = "Error: 404 (Not Found)";
    return messageEl;
}
