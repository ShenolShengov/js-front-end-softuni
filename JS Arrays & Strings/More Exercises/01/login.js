function solve(input){
    const [username, ...passwords] = input;
    const correctPassword  = username.split('').reverse().join('');
    passwords.forEach((e, i) => {
        if(e === correctPassword){
            console.log(`User ${username} logged in.`);
            return;
        }
        if(i == 3){
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
    });
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo', 'omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);