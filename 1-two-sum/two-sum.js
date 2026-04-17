/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map= new Map()
    
    for(i=0;i<nums.length;i++){
        let complement=target-nums[i];
        if(map.has(complement)){
            return [i,map.get(complement)]
        }
        map.set(nums[i],i)
    }
    // for(let i=0;i<n-1;i++){
    //     for(let j=i+1;j<n;j++){
    //         if(nums[i]+nums[j]==target)
    //         return [i,j]

    //     }
    // }

    
};