function solve() {
    const text = document.querySelector("#input").value;
    const outputDiv = document.querySelector("#output");

    const generatedHtml = processTextToParagraphs(text, 3);

    console.log(generatedHtml);

    outputDiv.innerHTML = generatedHtml;

    function processTextToParagraphs(text, sentencesPerParag) {
        const sentences = text.split(". ").filter((e) => e);
        const paragraphs = [];
        while (sentences.length != 0) {
            const pSentences = extractFirstSentenes(sentences, sentencesPerParag);
            paragraphs.push(wrapToParagraph(pSentences));
            sentences.splice(0, sentencesPerParag);
        }
        return paragraphs.join('');
    }

    function extractFirstSentenes(sentences, count) {
        return sentences
            .slice(0, count)
            .map((e) => e.trim())
            .join('.');
    }

    function wrapToParagraph(text) {
        return `<p>${text}</p>`;
    }
}

// function solve() {
// const text = document.querySelector('#input').value;
// const outputDiv = document.querySelector('#output');

// const generatedHtml = processText(text);

// console.log(generatedHtml);

// outputDiv.innerHTML = generatedHtml;

// function processText(text){
//   let formattedText = '';
//   const sentences = text.split('. ').filter(e => e);
//   let currentP = '';
//   sentences.forEach((e, i, arr) => {
//     currentP += e.trim() + '.';
//     if((i + 1) % 3 == 0){
//       formattedText += createPElement(currentP);
//       currentP = '';
//     }
//   });
//   if(currentP) formattedText += createPElement(currentP);
//   return formattedText;
// }

// function createPElement(p){
//   return `<p>${p}</p>`;
// }
// }
