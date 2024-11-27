function solve(carsDirections) {
    const parking = {};

    carsDirections.forEach(carDirection => {
        const [direction, carNumber] = carDirection.split(', ');
        direction == 'IN' ? parking[carNumber] = carNumber : delete parking[carNumber];
    });

    const carNumbers = Object.values(parking).sort();
    console.log(carNumbers.length == 0 ? 'Parking Lot is Empty' : carNumbers.join('\n')); 
}
solve([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
