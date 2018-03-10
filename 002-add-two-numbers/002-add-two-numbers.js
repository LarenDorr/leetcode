/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0; //进位
  let node = new ListNode(0);
  新节点;
  let res = node;
  while (l1 != null && l2 != null) {
    // 处理共长段
    let single = l1.val + l2.val;
    if (single + carry > 9) {
      node.next = new ListNode(single - 10 + carry);
      carry = 1;
    } else {
      node.next = new ListNode(single + carry);
      carry = 0;
    }
    node = node.next;
    (l1 = l1.next), (l2 = l2.next);
  }
  if (l1) {
    // 处理剩余
    surplus(l1);
  }
  if (l2) {
    surplus(l2);
  }
  if (carry) {
    node.next = new ListNode(carry);
  }
  return res.next;
  /**
   * @param {ListNode} l
   * @param {number} carry
   * @return {ListNode}
   */
  function surplus(l) {
    while (l) {
      if (carry) {
        var single = l.val + carry;
        if (single > 9) {
          carry = 1;
          single = single - 10;
        } else {
          carry = 0;
        }
      } else {
        var single = l.val;
      }
      node.next = new ListNode(single);
      l = l.next;
      node = node.next;
    }
  }
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(3);
l1.next = new ListNode(7);
// l1.next.next = new ListNode(2);
let l2 = new ListNode(9);
l2.next = new ListNode(2);
// l2.next.next = new ListNode(9);
let res = addTwoNumbers(l1, l2);
outNode(res);
function outNode(l) {
	while (l) {
		console.log(l.val);
		l = l.next;
	}
}

// 过于臃肿，待改进。