//Maximum subarray sum
/*
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/
const maxSubarraySum = (nums)=>{
  let max=Number.MIN_SAFE_INTEGER;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        max=Math.max(sum, max);
        if(sum<0){
            sum=0;
        }
        //let sum = 0;
        // for(let j=i;j<nums.length;j++){
        //     sum+=nums[j];
        //     max = Math.max(max, sum);
        // }
    }
    return max;
}
