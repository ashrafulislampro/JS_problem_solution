var sortBy = function(arr, fn) {
    // return fn(arr);
   return arr.sort((a, b) => fn(a) - fn(b));

};

// const arrSort = (arr) =>{
//     return arr.sort((a, b) => a - b);
// }; 

const arr = [5, 4, 1, 2, 3];
const result = sortBy(arr, arrSort);
console.log("result == ", result);