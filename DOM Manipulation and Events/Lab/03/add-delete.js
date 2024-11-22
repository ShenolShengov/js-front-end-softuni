function addItem() {
    
    function deleteItem(e) {
        e.target.parentElement.remove();
    }
    
    const itemsEl = document.querySelector('#items');
    const newItemInput = document.querySelector('#newItemText');
 
    if(!newItemInput.value) return;
 
    const newItemLi = document.createElement('li');
    newItemLi.textContent = newItemInput.value;
    
    const deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', '#');
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', deleteItem);
    
    newItemLi.appendChild(deleteLink);

    newItemInput.value = '';
 
    itemsEl.appendChild(newItemLi);

 }
 