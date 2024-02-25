function twoSum(nums, targets){

    for(var i= 0; i < nums.length - 1; i++){
        
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === targets){
                let result = [i, j];
                
                return result;
            }
        }
    }
}

const nums =[2, 5, 5, 11];
const result = twoSum(nums, 10);
console.log("result", result);