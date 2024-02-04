var createCounter = function(init) {
    const initVal = init;
    return {
        increment: function(){
            init++;
            return init;
        },
        decrement: function(){
            init--;
            return init;
        },
        reset: function(){
            init = initVal
            return init;
        }
    }
};


const counter = createCounter(5);
console.log(counter.increment()); 
console.log(counter.increment());
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement());
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.reset()); // 4