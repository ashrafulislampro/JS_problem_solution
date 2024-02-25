// first solve
var oncee = function(fn) {    
    let called = false;
    return function(...args){        
        if(!called){
            called = true;
            return fn(...args);
        } 
        return undefined;       
    }
    
};

// second solve
var once = function(fn) {
    let count = 0;
    return function(...args){
        count++;
        if(count === 1){
            let result = fn(...args);
            return [{"calls": count, "value": result}];
        }else if(count > 1){
            return 'undefined, fn was not called';
        }
        
    }
};



// let fn = (a,b,c) => (a + b + c)
let fn = (a,b,c) => (a * b * c)
let onceFn = once(fn)
let result = onceFn(5,7,4);
let result1 = onceFn(2,3,6);
let result2 = onceFn(4, 6, 8);
console.log(result);
console.log(result1);
console.log(result2);
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
