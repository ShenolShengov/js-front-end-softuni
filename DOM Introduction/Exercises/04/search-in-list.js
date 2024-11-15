function solve() {
   const towns = document.querySelectorAll('#towns li');
   const searchText = document.querySelector('#searchText').value;
   const resultElement = document.querySelector('#result');

   let matchesCount = 0;
   for(const town of towns) {
      if(town.textContent.includes(searchText)) {
         applyMathStyles(town);
         matchesCount++;
      } else {
         resetStyles(town);
      }
   }

   resultElement.textContent = `${matchesCount} matches found`;

   function applyMathStyles(town) {
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
   }

   function resetStyles(town) {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';
   }
}