function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    input
        .map((e) => {
            const [name, age] = e.split(" ");
            return new Cat(name, age);
        })
        .forEach((cat) => cat.meow());
}
solve(["Mellow 2", "Tom 5"]);
solve(["Candy 1", "Poppy 3", "Nyx 2"]);
