function solve(n) {
   const matrix = n => {
        let result = '';
        for(let i = 0; i < n; i++){
            result = result.concat((n + ' ').repeat(n).trim()).concat('\n');
        }
        return result.trim();
   };
   console.log(matrix(n));
}
solve(3);
solve(7);
