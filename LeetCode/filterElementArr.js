var filter = function(arr, fn) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        fn(arr[i], i);
        if(fn(arr[i], i)){
            newArr.push(arr[i]);
        }
        
    }

    return newArr;
};

function greaterThan10(n){
    return n > 10;
};

function firstIndex(n, i){
    return i === 0;
};

function plusOne(n){
    
        return n + 1;
    
};

const result = filter([0, 10, 20, 30], greaterThan10);
const result2 = filter([1, 2, 3], firstIndex);
const result3 = filter([-2, -1, 0, 1, 2], plusOne);

console.log("result", result);
console.log("result2", result2);
console.log("result3", result3);