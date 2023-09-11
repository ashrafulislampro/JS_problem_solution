function getMaxLessThanK(n, k){
    let max = 0;
    for(let i = 0; i <= n; i++){
        for(let j = i + 1; j <= n; j++){
            let bitAnd = i & j;
            if(max < bitAnd && bitAnd < k){
                max = bitAnd;
            }
        }
        
    }
    return max;
}


const result = getMaxLessThanK(2, 2);
console.log("result", result);