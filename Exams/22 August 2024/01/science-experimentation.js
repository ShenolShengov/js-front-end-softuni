function solve(input) {
    const chemicals = input.splice(0, input.shift())
        .reduce((chemicals, data) => {
            const [name, quantity] = data.split(' # ');
            
            chemicals[name] = {
                name,
                quantity: +quantity
            };
            return chemicals;
        },{});

        
      input.forEach(commData => {
        const [command, ...tokens] = commData.split(' # ');
        switch(command) {
            case 'Mix': {
                let[chemical1, chemical2, amount] = tokens;
                amount = +amount;
                if(chemicals[chemical1].quantity < amount || chemicals[chemical2].quantity < amount){
                    console.log(`Insufficient quantity of ${chemical1}/${chemical2} to mix.`);
                    break;
                }
                chemicals[chemical1].quantity -= amount;
                chemicals[chemical2].quantity -= amount;
                console.log(`${chemical1} and ${chemical2} have been mixed. ${amount} units of each were used.`);
            }
            break;
            case 'Replenish': {
                const [chemical, amount] = tokens;
                if(!chemicals[chemical]){
                    console.log(`The Chemical ${chemical} is not available in the lab.`);
                    break;
                }
                if(chemicals[chemical].quantity + (+amount) <= 500){
                    console.log(`${chemical} quantity increased by ${amount} units!`);
                    chemicals[chemical].quantity += +amount;
                    break;
                }
                console.log(`${chemical} quantity increased by ${500 - chemicals[chemical].quantity} units, reaching maximum capacity of 500 units!`);
                chemicals[chemical].quantity = 500;
            }
            break;
            case 'Add Formula': {
                const [chemical, formula] = tokens;
                if(!chemicals[chemical]){
                    console.log(`The Chemical ${chemical} is not available in the lab.`);
                    break;
                }
                chemicals[chemical].formula = formula;
                console.log(`${chemical} has been assigned the formula ${formula}.`);
            }
            break;
        }
      });

      Object.values(chemicals).forEach(chemical => {
            const formula = chemical.formula ? `, Formula: ${chemical.formula}` : '';
            console.log(`Chemical: ${chemical.name}, Quantity: ${chemical.quantity}${formula}`);
      });
}