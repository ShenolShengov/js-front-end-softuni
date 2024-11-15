function solve() {
	const text = document.querySelector('#text').value;
	const namingConvention = document.querySelector('#naming-convention').value;
	const resultSpan = document.querySelector('#result');


	resultSpan.textContent = convertToNamingConvention(text, namingConvention);

	function capitalize(word) {
		return word[0].toUpperCase() + word.substring(1);
	}

	function toCamelCase(words) {
		const firstWord = words.shift();
		return firstWord + toPascalCase(words);
	}

	function toPascalCase(words) {
		return words.map(capitalize).join('');
	}

	function convertToNamingConvention(text, namingConvention) {
		const words = text.split(' ').map(e => e.toLowerCase());

		if (namingConvention == 'Camel Case') {
			return toCamelCase(words);
		}
		if (namingConvention == 'Pascal Case') {
			return toPascalCase(words);
		}
		return 'Error!';
	}
}