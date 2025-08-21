var rotate = function(nums, k) {
     let temp=[]
    let n=nums.length
    k=k%n
    for(let i=0;i<k;i++){
        temp[i]=nums[n-k+i]
    }
    for(let i=k;i<n;i++){
        temp[i]=nums[i-k]
    }
    
for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }

    console.log(temp)
    
};