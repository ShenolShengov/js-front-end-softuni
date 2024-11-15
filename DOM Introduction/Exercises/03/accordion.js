function toggle() {
   const toggleButton = document.querySelector('.button');
   const extraElement = document.querySelector('#extra');
   console.log(extraElement);
   updateExtraElement(extraElement, toggleButton.textContent);
   updateToggleButton(toggleButton);

   function updateToggleButton(toggleButton){
        const currentText = toggleButton.textContent;
        toggleButton.textContent = currentText == 'More' ? "Less" : "More";
   }

   function updateExtraElement(extraElement, displayStatus){
        if(displayStatus == 'More') {
            extraElement.style.display = 'block';
        } else {
            extraElement.style.display = 'none';
        }
   }
}