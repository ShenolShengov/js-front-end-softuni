function solve() {
   const towns = document.querySelectorAll('#towns li');
   const searchText = document.querySelector('#searchText').value;
   const resultElement = document.querySelector('#result');

   if(!searchText) return;

   for(const town of towns) {
      if(town.textContent.includes(searchText)) {
         applyMathStyles(town);
      } else {
         resetStyles(town);
      }
   }
   const matchesCount = document.querySelectorAll('.match').length;
   resultElement.textContent = `${matchesCount} matches found`;

   function applyMathStyles(town) {
      town.classList.add('match');
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
   }

   function resetStyles(town) {
      town.classList.remove('match');
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';
   }
}