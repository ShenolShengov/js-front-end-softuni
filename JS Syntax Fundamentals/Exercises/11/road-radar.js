function solve(speed, area) {
    
    const limit = areaLimit(area);
    const diff = speed - limit;
    if(diff <= 0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${speedingStatus(diff)}`);
    }

    function areaLimit(area){
        switch(area) {
            case 'motorway' : return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function speedingStatus(speedOverLimit) {
        if(speedOverLimit <= 0) {
            return 'no speeding';
        }
        if(speedOverLimit > 40) return 'reckless driving';
        if(speedOverLimit > 20) return 'excessive speeding';
        return 'speeding';
    }
}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
