class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
var temp = [];
var key = [];

    for (var str of strs) {
        temp = str.split("");
        temp.sort();
        key = temp.join("");

        if (groups.has(key)) {
            groups.get(key).push(str)
        }
        else groups.set(key, [str])

    }
    return Array.from(groups.values())

    }
}
