/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let target = null;
        let current = head;
        let count = 0;
        let prev = null;
        let next = null;
        let current2 = head;

        while (current) {
            count++
            current = current.next; 
        }
        target = count - n + 1;

        if (target === 1) {
            head = head.next;
            return head;
        }

        for (let i = 0; i < target - 1; i++) {
                prev = current2;
                current2 = current2.next;
            }

        prev.next = current2.next
        return head;
    }
}
