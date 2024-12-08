function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';
   fetch(url)
      .then(r => r.text())
      .then(showData)
      .catch(error => console.error(error));
}

function showData(data){
   const reusltEl = document.querySelector('#res');
   reusltEl.textContent = data;
}