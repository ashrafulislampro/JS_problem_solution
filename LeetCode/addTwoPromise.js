
async function main(){
    var addTwoPromises = function(promise1, promise2){
        return Promise.all([promise1, promise2]).then((value)=>{
            const sum = value.reduce((total, curr)=> total + curr, 0);
            
            return sum;        
        });
    };
    
    const result = await addTwoPromises(Promise.resolve(6), Promise.resolve(5));
    console.log("result", result);
}

main();