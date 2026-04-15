class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();

        for (let read = 0; read < nums.length; read++){
           if (seen.has(nums[read])){
            return true
           }
           seen.add(nums[read])
    }
    return false
}
}
