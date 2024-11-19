//Maximum subarray sum
/*
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/
const maxSubarraySum = (nums)=>{
  let sum=0;
  let maxSum = 0;
  for(let i=0;i<nums.length;i++){
     sum+=nums[i];
     maxSum = Math.max(sum, maxSum);
     if(sum<0) sum=0;
  }
  return maxSum;
}
