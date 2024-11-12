function solve(input){
    const meetings = {};
    input.forEach(s => {
        const [day, name] = s.split(' ');
        if(!Object.hasOwn(meetings, day)){
            console.log(`Scheduled for ${day}`);
            meetings[day] = name;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });
    for(const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);