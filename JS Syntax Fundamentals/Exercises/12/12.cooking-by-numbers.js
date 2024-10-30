function solve(num, op1, op2, op3, op4, op5) {
    num = Number(num);
    const options = [op1, op2, op3, op4, op5];
    for(let i = 0; i < options.length; i++) {
        switch (options[i]) {
            case "chop":
                num = chop(num);
                break;
            case "dice":
                num = dice(num);
                break;
            case "spice":
                num = spice(num);
                break;
            case "bake":
                num = bake(num);
                break;
            case "fillet":
                num = fillet(num);
        }
        console.log(num);
    }

    function chop(num) {
        return num / 2;
    }

    function dice(num) {
        return Math.sqrt(num);
    }

    function spice(num) {
        return num + 1;
    }

    function bake(num) {
        return num * 3;
    }

    function fillet(num) {
        return num * 0.8;
    }
}
solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
