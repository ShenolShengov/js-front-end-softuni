const starsRadioButtons = document.querySelectorAll('input[type="radio"]');
        starsRadioButtons.forEach(element => {
            const buttonId = element.id;
            element.addEventListener('click', e => {
                resetAllStars();
                const selectedStars = document.querySelectorAll(`.star:has(~ #${buttonId}) > svg`);
                selectedStars.forEach(s => s.classList.add('fill-orange'));
            });
        });

        function resetAllStars(){
            document.querySelectorAll(`.star > svg`)
                .forEach(e => e.classList.remove('fill-orange'));
        }