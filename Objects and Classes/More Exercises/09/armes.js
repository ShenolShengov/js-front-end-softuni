function solve(commands) {

    const leadresArmies = {};

    commands.forEach(c => {
        
        console.log();
        

        if(c.includes('arrives')){
            leadresArmies[c.split(' arrives')[0]] = {armies: [], totalArmyCount: 0};
        }

        if(c.includes(':')){
            const [leader, armyName, armyCount] = c.split(/: |, /g);
            if(leadresArmies[leader]) {
                leadresArmies[leader].armies.push({name: armyName, count: +armyCount});
                leadresArmies[leader].totalArmyCount += (+armyCount);
            }
        }

        if(c.includes('+')){
            const [armyName, armyCount] = c.split(' + ');
            Object
                .values(leadresArmies)
                .forEach(leaderArmies => {
                    const foundArmy = leaderArmies.armies.find(a => a.name == armyName);
                    if(foundArmy){
                        foundArmy.count = foundArmy.count + (+armyCount);
                        leaderArmies.totalArmyCount += (+armyCount);
                        return;
                    }
                    
                });
        }

        if(c.includes('defeated')){
            delete leadresArmies[c.replace(' defeated', '')];
        }
    });

    Object
        .entries(leadresArmies)
        .sort(([l1, a1],[l2, a2]) => a1.totalArmyCount < a2.totalArmyCount ? 1 : a1.totalArmyCount == a2.totalArmyCount ? 0 : -1)
        .forEach(([leader, armiesInfo]) => {
            console.log(`${leader}: ${armiesInfo.totalArmyCount}`);
            armiesInfo.armies
                .sort((a1, a2) => a1.count < a2.count ? 1 : a1.count == a2.count ? 0 : -1)
                .forEach(a => console.log(`>>> ${a.name} - ${a.count}`));
        });
    
}