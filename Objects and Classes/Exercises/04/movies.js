function solve(input) {

    const movies = {};

    input.forEach(command => {
        const [name, token] = command.split(/addMovie | directedBy | onDate /g).filter(e => e);

        if(command.includes('addMovie')){
            movies[name] = {name};
            return;
        }

        const movie = movies[name];
        if(!movie) return;

        const propertyName = command.includes('directedBy') ? 'director' : 'date';
        movie[propertyName] = token
    });


    for(const movieName in movies){
        if(Object.keys(movies[movieName]).length == 3) console.log(JSON.stringify(movies[movieName]));
    }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
