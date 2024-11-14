function extractText() {
    const liTexts = [...document.querySelectorAll('#items li')]
        .map(e => e.textContent)
        .join('\n');
    const textArea = document.querySelector('#result, textarea');
    textArea.value = liTexts;
}