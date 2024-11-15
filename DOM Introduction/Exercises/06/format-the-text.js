function solve() {
  const text = document.querySelector('#input').value;
  const outputDiv = document.querySelector('#output');

  const generatedHtml = processText(text);

  console.log(generatedHtml);

  outputDiv.innerHTML = generatedHtml;

  function processText(text){
    let formattedText = '';
    const sentences = text.split('.').filter(e => e);
    let currentP = '';
    sentences.forEach((e, i, arr) => {
      currentP += e.trim() + '.';
      if((i + 1) % 3 == 0){
        formattedText += createPElement(currentP);
        currentP = '';
      }
    });
    if(currentP) formattedText += createPElement(currentP);
    return formattedText;
  }

  function createPElement(p){
    return `<p>${p}</p>`;
  }
}