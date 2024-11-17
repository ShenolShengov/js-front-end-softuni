function solve(first, second) {
    const store = {};
    const addProvision = (store, name, quantity) => store[name] = (store[name] || 0) + quantity;

    for (let i = 0; i < first.length; i += 2) {
        addProvision(store, first[i], Number([first[i + 1]]));
    }

      for (let i = 0; i < second.length; i += 2) {
        addProvision(store, second[i], Number([second[i + 1]]));
    }

    for(const provision in store){
        console.log(`${provision} -> ${store[provision]}`);
    }
}
solve(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    [
        "Flour",
        "44",
        "Oil",
        "12",
        "Pasta",
        "7",
        "Tomatoes",
        "70",
        "Bananas",
        "30",
    ]
);
