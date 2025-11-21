//Two Sum:Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    /*let map = new Map();
    let arr = [];
    for(let i=0; i<nums.length;i++){
        let sum = nums[i];
        if(map.has(target-sum)){
            arr.push(i);
            arr.push(map.get(target-sum));
            break;
        }
        map.set(sum, i);
    }
    return arr;*/
    var arr = nums;
    arr = [...arr].sort((a,b)=>a-b);
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        let sum = arr[left]+arr[right];
        if(sum===target){
            return [nums.indexOf(arr[left]), nums.lastIndexOf(arr[right])]
        }else if(sum<target){
            left++;
        }else right--;
    }
};
