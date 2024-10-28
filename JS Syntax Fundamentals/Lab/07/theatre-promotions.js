function solve(day, age){
    if(age < 0 || age > 122){
        console.log('Error!');
        return;
    }

    let price;
    if (day === 'Weekday') {
        price = priceByAge(12, 18, 12);
    } else if (day === 'Weekend') {
        price = priceByAge(15, 20, 15);
    } else {
        price = priceByAge(5, 12, 10);
    }
    console.log(`${price}$`);

    function priceByAge(young, adult, old){
        return age > 64 ? old : age > 18 ? adult : young;
    }
}
solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);