function solve(base, increment){
    let step = 1;
    const materials = getMaterialsMap();
    while(base >= 1){

        if( base <= 2) {
            materials.set('gold', calcualteGoldForBase(base, increment));
            break;
        } 

        const decorativeMaterial = calculateDecorativeMaterialForBase(base, increment);
        const stoneMaterials = calculateStoneForBase(base, increment);

        materials.set('stone', materials.get('stone') + stoneMaterials);
        
        if(step % 5 == 0){
            materials.set('lazuli', materials.get('lazuli') + decorativeMaterial);
        } else {
            materials.set('marble', materials.get('marble') + decorativeMaterial);
        }

        step++;
        base -=2;
    }

    materials.forEach((v, k) => materials.set(k, Math.ceil(v)));

    console.log(
        `Stone required: ${materials.get('stone')}
Marble required: ${materials.get('marble')}
Lapis Lazuli required: ${materials.get('lazuli')}
Gold required: ${materials.get('gold')}
Final pyramid height: ${Math.floor(step * increment)}
                `);
    

    function getMaterialsMap(){
        const materials = new Map();
        materials.set('stone', 0);
        materials.set('marble', 0);
        materials.set('lazuli', 0);
        materials.set('gold', 0);
        return materials;
    }

    function calculateDecorativeMaterialForBase(base, increment) {
        return (base * 2 + (base - 2) * 2) * increment;
    }

    function calculateStoneForBase(base, increment) {
        base -=2;
        return (base ** 2) * increment;
    }

    function calcualteGoldForBase(base, increment){
        return (base ** 2) * increment;
    }

}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);