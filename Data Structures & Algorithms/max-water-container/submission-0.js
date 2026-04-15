class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let left = 0;
        let right = n - 1;
        let max = 0;

        while (left < right) {
            let width = right - left;
            let actHeight = Math.min(heights[left], heights[right]);
            let calculate = width * actHeight;

            if (calculate > max) {
                max = calculate;
            }
            else if (heights[left] === heights[right]) {
                left++
            }
            else if (heights[left] < heights[right]) {
                left++
            }
            else if (heights[left] > heights[right]) {
                right--
            }
        }
        return max;
    }
}
