window.addEventListener("load", solve);

function solve() {
  const addBtn = document.querySelector('#add-btn');

  addBtn.addEventListener('click', addEntry);


  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    location.reload();
  });

  function addEntry(e){
    const model = document.querySelector('#laptop-model').value;
    const price = document.querySelector('#price').value;
    const storage = document.querySelector('#storage').value;

    if(model == '' || price == '' || storage == '') return;
    
    e.target.disabled = true;
    document.querySelector('.laptop-info').reset();

    createEntry({model, storage, price});

  }

  function createEntry(data){
    const checkList = document.querySelector('#check-list');
    const liEl = createElement('li', {className: 'laptop-item', dataset: data}, checkList);
    const articleEl = createElement('article', {} ,liEl);
    createElement('p', {textContent: data.model}, articleEl);
    createElement('p', {textContent: `Memory: ${data.storage} TB`}, articleEl);
    createElement('p', {textContent: `Price: ${data.price}$`}, articleEl);
    createElement('button', {className: 'btn edit', textContent: 'edit', onclick : editEntry}, liEl);
    createElement('button', {className: 'btn ok', textContent: 'ok', onclick : approveEntry}, liEl);
  }

  function editEntry(e){
    const liEl = e.target.closest('li');
    const data = Object.values(liEl.dataset);
    document.querySelectorAll('input').forEach((input, i) => input.value = data[i]);
    liEl.remove();
    document.querySelector('#add-btn').disabled = false;
  }

  function approveEntry(e){
    const liEl = e.target.closest('li');
    liEl.querySelectorAll('.edit, .ok').forEach(e => e.remove());
    document.querySelector('#laptops-list').appendChild(liEl);
    document.querySelector('#add-btn').disabled = false;

  }

  function createElement(tag, properties, parent){
    const el = document.createElement(tag);
    Object.keys(properties).forEach(k => {
      if(typeof properties[k] == 'object'){
        Object.assign(el[k], properties[k]);
      } else {
        el[k] = properties[k];
      }
    });
    if(parent) parent.appendChild(el);
    return el;
  }
}

  