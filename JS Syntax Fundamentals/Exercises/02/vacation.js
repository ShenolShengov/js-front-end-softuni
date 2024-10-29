function solve(personCount, type, dayOfTheWeek){

    let pricePerPerson;
    let discount = 0;
    if (type === 'Students') {
        pricePerPerson = priceByDayOfTheWeek(8.45, 9.80, 10.46);
        if (personCount >= 30) {
            discount += 0.15;
        }
    } else if (type === 'Business') {
        pricePerPerson = priceByDayOfTheWeek(10.90, 15.60, 16);
        if (personCount >= 100) {
            personCount -= 10;
        }
    } else {
        pricePerPerson = priceByDayOfTheWeek(15, 20, 22.50);
        if (personCount >= 10 && personCount <= 20) {
            discount += 0.05;
        }
    }

    const totalPrice = (personCount * pricePerPerson) * (1 - discount);
    console.log(`Total price: ${totalPrice.toFixed(2)}`);


    function priceByDayOfTheWeek(fridayPrice, saturdayPrice, sundayPrice){
        if (dayOfTheWeek === 'Friday') {
            return fridayPrice;
        } else if (dayOfTheWeek === 'Saturday') {
            return saturdayPrice;
        } else if (dayOfTheWeek === 'Sunday') {
            return sundayPrice;
        } else {
            return 'Not valid day';
        }
    }
}
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");