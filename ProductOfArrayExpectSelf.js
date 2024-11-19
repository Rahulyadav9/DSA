//Product of Array Except Self
//Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
//input nums = [4,0,4];
//output = [0,0,0]
var productExceptSelf = function(nums) {
    let ans = new Array(nums.length).fill(1);
    let curr = 1;
    for(let i in nums){
        ans[i] *= curr;
        curr*=nums[i];
    }
    curr=1;
     for(let i = nums.length-1; i >= 0; i--) {
        ans[i] *= curr;
        curr *= nums[i];
    }
   
    return ans;
};
