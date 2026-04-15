class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const objectS = new Object();
        const objectT = new Object();
        const keyS = 0;
        const keyT = 0;

        if (s.length === t.length){
            for (let i of s){
                if (objectS[i]){
                    objectS[i] = objectS[i] + 1;
                }
                else objectS[i] = 1;
            }

            for (let i of t){
                if (objectT[i]){
                    objectT[i] = objectT[i] + 1;
                }
                else
                objectT[i] = 1;
            }
            
            for (let key in objectS){
                if (objectS[key] !== objectT[key])
                return false
            }
            return true


            } else return false
        }
    }
