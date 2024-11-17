function solve(input) {
    
    class Town {
        constructor(name, latitude , longitude){
            this.name = name;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }

        toString() {
            return `{ town: '${this.name}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`;
        }
    }


    const towns = [];

    input.forEach(data => {
        const[name, latitude, longitude] = data.split(' | ');
        const town = new Town(name, latitude, longitude);
        towns.push(town);
    });
    
    towns.forEach(e => console.log(e.toString()));

}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);