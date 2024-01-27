/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val)
    if (!this.first){
      this.first = node
      this.last = node
    }
    else{
      this.last.next = node
      this.last = node
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    try {
      let node = this.first
      while (node.next.next){
        node = node.next
      }
      let val = node.next.val 
      node.next = null
      this.last = node
      return val
    }
    catch{
      return err
  }
}

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.last.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.first){
      return false
    }
    return true
  }
}

module.exports = Stack;
