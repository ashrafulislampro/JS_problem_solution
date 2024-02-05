var reduce = function(nums, fn, init) {
    let reduceVal = init;
    for(let i = 0; i < nums.length; i++){
        reduceVal = fn(reduceVal, nums[i]);
    }

   return nums.length ? reduceVal : init;
};

function sum(total, n){
    let result = total + n;
    return result;
};

function sumWithMul(total, n){
    let result = total + n * n;
    return result;
};

function emptyArr(total, n){
    return 0;
}

const result = reduce([1, 2, 3, 4], sum, init = 0);
const result2 = reduce([1, 2, 3, 4], sumWithMul, init = 100);
const result3 = reduce([], emptyArr, init = 25);

console.log("result", result);
console.log("result2", result2);
console.log("result3", result3);