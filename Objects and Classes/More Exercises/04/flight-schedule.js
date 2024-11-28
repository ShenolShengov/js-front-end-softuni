function solve(flightsData) {

    class Flight {

        static parse(data){
            const [sector, destination] = data.split(' ');
            return new Flight(sector, destination);
        }
    
        constructor (sector, destination) {
            this.sector = sector;
            this.destination = destination;
            this.status = 'Ready to fly';
        }
    
        cancel() {
            this.status = 'Cancelled';
        }
    
    
        info() {
            return `{ Destination: '${this.destination}', Status: '${this.status}' }`;
        }
    
    }


    const [newFlightsData, changedStatus, statusToCheck] = flightsData;

    const flights = newFlightsData.reduce((flights, flightData) => {
        const flight = Flight.parse(flightData);
        flights[flight.sector] = flight;
        return flights;
    }, {});

    changedStatus.map(data => data.split(' ')[0].trim()).forEach(sector => {
        const flight = flights[sector];
        if(flight) flight.cancel();
    });

    
    Object.values(flights).filter(f => f.status === statusToCheck[0]).forEach(flight => console.log(flight.info()));
}
solve([['WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK430 Cancelled'],
     ['Cancelled']
 ]);