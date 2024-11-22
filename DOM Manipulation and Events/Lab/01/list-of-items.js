function addItem() {
   const itemsEl = document.querySelector('#items');
   const newItemInput = document.querySelector('#newItemText');

   if(!newItemInput.value) return;

   const newItemLi = document.createElement('li');
   newItemLi.textContent = newItemInput.value;
   newItemInput.value = '';

   itemsEl.appendChild(newItemLi);
}
