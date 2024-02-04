var map = function(arr, fn) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr[i] = fn(arr[i], i);
    }
    
    return newArr;

};

function plusone(n){
    return n + 1;
};

function plusI(n, i){
    return n + i;
};

function constant(){
    return 42;
}

const result = map([1, 2, 3], plusone);
const result2 = map([1, 2, 3], plusI);
const result3 = map([1, 2, 3], constant);

console.log("result", result);
console.log("result2", result2);
console.log("result3", result3);