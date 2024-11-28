function solve(rawProducts) {
    const sortedProducts = {};

    const groupProducts = rawProducts.reduce((groupProducts, curr) => {
        const [name, price] = curr.split(' : ');
        const product = {name, price: Number(price)};
        const firstLetter = name.substring(0, 1);
        groupProducts[firstLetter] ??= [];
        groupProducts[firstLetter].push(product);
        return groupProducts;
    }, {});

    Object.entries(groupProducts).sort(([l1, p1], [l2, p2]) => l1.localeCompare(l2))
            .forEach(([letter, products]) => {
                products = products.sort((first, second) => first.name.localeCompare(second.name));
                console.log(letter);
                const a = 2.5;
                products.forEach(p => console.log(`  ${p.name}: ${p.price}`));
            });
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
