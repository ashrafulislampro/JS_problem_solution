function getMaxLessThanK(n, k){
    let max = 0;
   
    for(let i = 0; i <= n; i++){
        for(let j = i + 1; j <= n; j++){

            let bitAnd = i & j;
            console.log("bitAnd7", bitAnd, "index", i, j); 
            if(max < bitAnd && bitAnd < k){ 
                max = bitAnd; 
            }
        }
        
    }
    console.log("max", max);
    return max;
}


const result = getMaxLessThanK(5, 4);
// console.log("result", result);