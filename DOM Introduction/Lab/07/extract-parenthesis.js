function extract(content) {
    const textToExtract = document.querySelector('p#content').textContent;
    return textToExtract.split(/\(|\)/gm).filter((_, i) => i % 2 != 0);
}