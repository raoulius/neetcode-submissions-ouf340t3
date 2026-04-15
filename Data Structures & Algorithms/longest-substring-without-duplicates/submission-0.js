class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let longest = 0;

        for (let right = 0; right < s.length; right++){
            while (set.has(s[right]) === true){
                set.delete(s[left]);
                left++
            }

            set.add(s[right]);
            if (set.size > longest) {
                longest = set.size;
            }
        }
        return longest;
    }
}
