function solve(firstName, lastName, hairColor) {
    const obj = {
        'name': firstName,
        lastName: lastName,
        hairColor
    };
    return JSON.stringify(obj);
}
console.log(solve('George', 'Jones', 'Brown'));
console.log(solve('Peter', 'Smith', 'Blond'));