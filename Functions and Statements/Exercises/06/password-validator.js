function solve(password) {
    const errors = passwordsConstarintVioliation(password);
    if(errors.length != 0){
        errors.forEach(e => console.log(e));
    } else {
        console.log('Password is valid');
    }

    function passwordsConstarintVioliation(password){
        const errors = [];
        ((p, errors) => {
            if(p.length < 6 || p.length > 10) errors.push('Password must be between 6 and 10 characters');
        }
        )(password, errors);
        ((p, errors) => {
            if(!/^[a-zA-z0-9]+$/.test(p)) errors.push('Password must consist only of letters and digits');
        })
        (password, errors);
         ((p, errors) => {
           if(p.split('').filter(e => Number.isInteger(+e)).length < 2) errors.push('Password must have at least 2 digits');
        })
        (password, errors);
        return errors;
    }
}
solve('logIn');
solve('MyPass123');
solve('Pa$s$s');
