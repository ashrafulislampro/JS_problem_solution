var compose = function(functions){
    return function(x){
        let total = x;
        for(let i = functions.length - 1; i >= 0; i--){
            let element = functions[i](total);
            total = element;
        }
        return total;
    }
};
// x => x + 1, x => x * x, x => 2 * x
// x=> x + 1, x=> 2 * x
const fun = compose([x=> x + 1, x=> 2 * x]);
console.log(fun(4));