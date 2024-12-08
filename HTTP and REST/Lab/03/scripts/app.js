function loadRepos() {
	const url = 'https://api.github.com/users/{username}/repos';

	const usernameInput = document.querySelector('#username');
	const username = usernameInput.value;
	fetch(url.replace('{username}', username))
		.then(r => r.json())
		.then(showRepos)
		.catch(err => console.error(err));
	usernameInput.value = '';
}

function showRepos(reposData) {
	const reposUl = document.querySelector('#repos');
	reposUl.innerHTML = '';

	reposData.map(toListEl).forEach(link => {
		reposUl.appendChild(link);
	});
}

function toListEl(repoData){
	console.log(repoData.full_name);
	console.log(repoData.html_url);

	const name = repoData.full_name;
	const link = repoData.html_url;

	const liEl = createElement('li');
	createElement('a', {href: link, textContent: name}, liEl);

	return liEl;
}

function createElement(tag, properites, parrent){
	const el = Object.assign(document.createElement(tag), properites || {});
	if(parrent) parrent.appendChild(el);
	return el;
}