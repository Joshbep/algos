var twoSum = function(nums, target) {
    let newArr = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                newArr.push(i)
                newArr.push(j)
            }
        }
    }
    return newArr
};

console.log(twoSum([2,1,3,4], 3))

var twoSum = function(nums, target) {
  let hash = {};
  nums.forEach((item, i) => {
    hash[item] = i
  });

  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];

    if (hash[val] !== undefined && hash[val] !== i) {
      return [i, hash[val]]
    }
  }
};
