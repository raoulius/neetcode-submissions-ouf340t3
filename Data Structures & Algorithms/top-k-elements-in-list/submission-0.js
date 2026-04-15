class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var groups = new Map();

    for (let i = 0; i < nums.length; i++){
        if (groups.has(nums[i])) {
            groups.set(nums[i], groups.get(nums[i]) + 1);
        }
        else groups.set(nums[i], 1)
    }

    const arr = Array.from(groups);
    arr.sort((a, b) => b[1] - a[1])
    const kResult = arr.slice(0, k)
    const result = kResult.map(function(num) {
        return num[0];
    })

    return result;
    }
}
