class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let left = 0;
        let right = m * n - 1;

        while (left <= right){
            let mid = Math.trunc((left + right) / 2);
            let row = Math.trunc(mid / n);
            let column = mid % n;

            if (matrix[row][column] === target) {
                return true;
            } else if (matrix[row][column] < target) {
                left = mid + 1;
            } else if (matrix[row][column] > target) {
                right = mid - 1;
            }
            else { return true}
        }

        if (left > right) {
            return false;
        }
    }
}
