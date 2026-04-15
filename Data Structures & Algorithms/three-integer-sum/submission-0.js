class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    let n = nums.length;
    const sorted = nums.toSorted((a,b) => a - b);
    let answer = [];
    

    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;
        if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

        while (left < right){ 
            let sum = sorted[i] + sorted[right] + sorted[left]
            
            if (sum === 0) {
                answer.push([sorted[i], sorted[left], sorted[right]]);
                left++;
                right--;

                while(left < right && sorted[left] === sorted[left - 1]) {
                    left++
                }
                while(left < right && sorted[right] === sorted[right + 1]) {
                    right--
                }
            }
            else if (sum < 0) {
                left++
            } 
            else if (sum > 0) {
                right--
            }
        }
    }
    return answer;
    }
}
