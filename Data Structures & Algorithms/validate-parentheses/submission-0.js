class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const mapping = {
            "}" : "{",
            "]" : "[",
            ")" : "(",
        };

        for (let x of s) {
            if (!Object.keys(mapping).includes(x)) {
                stack.push(x)
            }
            else {
                if (stack.length === 0) {
                    return false;
                }
                else {
                    let top = stack.pop();
                    if (mapping[x] != top) {
                        return false;
                    }
                }
            }
        }

        if (stack.length === 0) {
            return true;
        }
        else {return false};
    }
}
