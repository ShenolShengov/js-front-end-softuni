function solve(product, quantity) {

    const productPrice = getProductPrice(product);
    const bill = productPrice * quantity;
    console.log(`${bill.toFixed(2)}`);

    function getProductPrice(product) {
        switch(product) {
            case 'coffee': return 1.50;
            case 'water': return 1.00;
            case 'coke': return 1.40;
            case 'snacks': return 2.00;
        }
    }
}
solve("water", 5);
solve("coffee", 2);
