const promise = new Promise((res, rej) => {
    res('Hello');
});
const a = promise.then(e => e);
console.log(a[[0]]);
