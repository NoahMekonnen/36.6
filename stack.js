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
      this.size = 1
    }
    else{
      this.first.next = node
      this.first = node
      this.size += 1
    }
    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    try {
      let node = this.last
      if (!node.next){
        this.first = null
        this.last = null
        this.size = 0
      }
      else{
      while (node.next.next){
        node = node.next
      }
      let val = node.next.val 
      node.next = null
      this.first = node
      this.size -=1
      return val
    }
  }
    catch{
      throw new Error("No node to remove")
    }
}

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.last){
      return false
    }
    return true
  }
}

module.exports = Stack;
