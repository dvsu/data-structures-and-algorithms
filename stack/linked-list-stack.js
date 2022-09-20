class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// insert and remove the node from the beginning
// of list so both operations can be in constant time
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this.size;
  }

  pop() {
    if (!this.size) {
      return null;
    }
    const tempNode = this.first;
    this.first = this.first.next;
    tempNode.next = null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.size -= 1;

    // console.log("first", this.first?.value);
    // console.log("last", this.last?.value);
    return tempNode.value;
  }
}

const stack = new Stack();

console.log(stack.push("alpha"));
console.log(stack.push("bravo"));
console.log(stack.push("charlie"));
console.log(stack.push("delta"));
console.log(stack.push("echo"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.push("foxtrot"));
console.log(stack.push("golf"));
console.log(stack.push("hotel"));
console.log(stack.pop());
console.log(stack.pop());
