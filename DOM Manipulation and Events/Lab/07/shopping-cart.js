document.addEventListener('DOMContentLoaded', solve);
console.log('Mine');


function solve() {

   function addProduct(e) {
      const resultEl = document.querySelector('textarea');
      const productEl = e.target.closest('.product');
      const productName = productEl.querySelector('.product-title').textContent;
      const productPrice = Number(productEl.querySelector('.product-line-price').textContent).toFixed(2);

      resultEl.value = resultEl.value + `Added ${productName} for ${productPrice} to the cart.\n`;
   }

   function disableButtons(e) {
      [...document.querySelectorAll('button')].forEach(e => e.disabled = true);
   }

   function showTotalPrice(e) {
      const regex = /(?<=Added )\w+|(?<= for )\d.\d+(?= to the cart)/gm;
      const products = [];
      const textarea = document.querySelector('textarea');   
      

      textarea.value.trim().split('\n').filter(e => e).forEach(e => {
         const [name, price] = e.match(regex);
         products[name] = (products[name] || 0) + Number(price);
      })
      
      const productsNames = Object.keys(products).join(', ');
      const totalPrice = Object.values(products).reduce((total, c) => total + c, 0);
      textarea.value = textarea.value + `You bought ${productsNames} for ${totalPrice.toFixed(2)}.`;
      textarea.value = textarea.value.trim();
   }

   const addButtons = document.querySelectorAll('.add-product');
   [...addButtons].forEach(e => e.addEventListener('click', addProduct));

   const checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', showTotalPrice);
   checkoutBtn.addEventListener('click', disableButtons);


}
