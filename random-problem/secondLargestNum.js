function getSecondLargestNum(nums){
    let largestValue = Math.max(...nums);
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let element = nums[i];
        if(element !== largestValue){
            result.push(element);
        }
    }


       return Math.max(...result);   

}
let nums = [2, 4, 5, 6, 6, 7, 5, 7, 5];
// getSecondLargestNum(nums);
const result = getSecondLargestNum(nums);
console.log("result = ", result);


