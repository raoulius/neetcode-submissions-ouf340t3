class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (let x of strs) {
            str += `${x.length}` + "#" + x;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let array = [];

        while (i < str.length) {
            let j = str.indexOf("#", i);
            let number = str.substring(i, j)
            let numberer = parseInt(number);


            let calculated = str.substring(j + 1, j + 1 + numberer);
            i = j + 1 + numberer;

            array.push(calculated);
        }

        return array;
    }
}
