var isEmpty = function(obj) {
    const isEmt = Object.keys(obj).length;
    return isEmt;
};
const obj = {};
const result = isEmpty(obj);
console.log(result);    
console.log(Object.keys(obj));

