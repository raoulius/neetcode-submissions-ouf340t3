class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const letters = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const split = letters.split("");
    const reverse = split.reverse();
    const join = reverse.join("");

    if (join === letters){
        return true
    } else return false;
};
    
}
