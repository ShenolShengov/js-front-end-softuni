function solve(input) {
    const heroes = input.reduce((acc, data) => {
        const [name, level, ...items] = data.split(" / ");
        acc.push(parseToHero(name, level, items));
        return acc;
    }, []).sort((a, b) => a.level < b.level ? -1 : a.level == b.level ? 0 : 1);


    heroes.forEach(e => console.log(e.toString()));

    
    function parseToHero(name, level, ...items) {
        return {
            name,
            level: +level,
            items,
            toString: () => `Hero: ${name}\nlevel => ${level}\nitems => ${items.join(', ')}`
        };
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
