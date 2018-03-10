var twoSum = function(nums, target) {
  let map = new Map();
  for (let n = 0; n < nums.length; n++) {
    if (map.has(nums[n])) {
      return [map.get(nums[n]), n];
    }
    map.set(target - nums[n], n);
  }
};
