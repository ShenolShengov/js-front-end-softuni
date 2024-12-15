function solve(input) {
    const count = Number(input.shift());
    const farmers = input.splice(0, count)
        .reduce((farmers, data) => {
            const [name, area, ...tasks] = data.split(/ |,/g);
            farmers[name] = {name, area, tasks};
            return farmers;
        }, {});

    input.forEach(commandLine => {
        const [command, ...tokens] = commandLine.split(' / ');
        const name = tokens.shift();
        const foundFarmer = farmers[name];
        switch (command) {
            case 'Execute': {
                const [area, task] = tokens;
                if(foundFarmer.area == area && foundFarmer.tasks.includes(task)){
                    console.log(`${name} has executed the task: ${task}!`);
                } else {
                    console.log(`${name} cannot execute the task: ${task}.`);
                }
            }
            break;
            case 'Change Area': {
               const [newArea] = tokens;
               foundFarmer.area = newArea;
               console.log(`${name} has changed their work area to: ${newArea}`);
            }
            break;
            case 'Learn Task': {
                const [newTask] = tokens;
                if(foundFarmer.tasks.includes(newTask)){
                    console.log(`${name} already knows how to perform ${newTask}.`);
                } else {
                    foundFarmer.tasks.push(newTask);
                    console.log(`${name} has learned a new task: ${newTask}.`);
                }
            }
            break;
        }
    });

    Object.values(farmers).forEach(f => {
        const sortedTasks = f.tasks.sort((f, s) => f.localeCompare(s)).join(', ');
        console.log(`Farmer: ${f.name}, Area: ${f.area}, Tasks: ${sortedTasks}`);
    });
}
solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ])