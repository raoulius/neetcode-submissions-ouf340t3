class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let additional = []
    let i = 0
    let length = nums.length-1

    if (nums.length === 1) {
        return
    }

    if (k === nums.length) {
        return
    }

    k = k % nums.length
    while (i < k) {
        additional.push(nums[length])
        nums.pop()
        length--
        i++
    }
    let l = 0

    for (let o in additional) {
        nums.unshift(additional[l])
        l++
    }

    }
}
