function solve(carsData) {
    class Garage {

        constructor(number) {
            this.number = +number;
            this.cars = [];
        }

        addCar(car){
            this.cars.push(car);
        }
    }

    class Car {

        static parseCar(carDada){
            return carDada.split(', ').reduce((car, property) => {
                const [key, value] = property.split(': ');
                car[key] = value;
                return car;
            }, new Car());
        }
        constuctor(){}

        toString() {
            const propertiesToString = Object
                                        .entries(this)
                                        .map(([key, value]) => `${key} - ${value}`)
                                        .join(', ');
            return `--- ${propertiesToString}`;
        }
    }

    
    
    
    const garages = {};

    carsData.forEach(data => {
        const [garageNumber, carProperties] = data.split(' - ');
        garages[garageNumber] ??= new Garage(garageNumber);
        const car = Car.parseCar(carProperties);
        garages[garageNumber].addCar(car);
    });

    Object.values(garages).forEach(g => {
        console.log(`Garage № ${g.number}`);
        console.log(g.cars.map(e => e.toString()).join('\n'));
    });
    
}