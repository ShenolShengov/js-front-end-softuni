function solve(input) {
    const commands = getCommands();
    let cleanPercentage = 0;
    input.forEach(e => cleanPercentage = commands[e](cleanPercentage));
    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);

    function getCommands(){
        const commands = [];
        commands['soap'] = v => v + 10;
        commands['water'] = v => v * 1.2;
        commands['vacuum cleaner'] = v => v * 1.25;
        commands['mud'] = v => v * 0.9;
        return commands;
    }
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);