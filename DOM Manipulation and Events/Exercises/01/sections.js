document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.querySelector('#task-input');

   formEl.addEventListener('submit', generateBoxes);


   function generateBoxes(e){
      e.preventDefault();
      const elementsText = e.currentTarget.querySelector('input[type="text"').value.split(',').filter(e => e.trim());

      const contentEl = document.querySelector('#content');
      elementsText.forEach(text => addBox(text, contentEl));
   }

   function addBox(text, contentEl){
      contentEl.appendChild(createBox(text));
   }

   function showBoxText(e){
      e.target.querySelector('p').style.display = 'block';
   }

   function createBox(text){
      const boxEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = text.trim();
      pEl.style.display = 'none';
      boxEl.appendChild(pEl);
      boxEl.addEventListener('click', showBoxText);
      return boxEl;
   }
}