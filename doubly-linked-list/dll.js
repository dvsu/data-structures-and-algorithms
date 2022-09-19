const Node = require("./node");

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length -= 1;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length -= 1;
    return shiftedNode;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let tempNode = this.head;
    if (idx < this.length / 2) {
      // from head
      for (let i = 0; i <= idx; i++) {
        if (i < idx) {
          tempNode = tempNode.next;
          continue;
        }
        return tempNode;
      }
    }
    // from tail
    tempNode = this.tail;
    for (let i = this.length - 1; i >= idx; i--) {
      if (i > idx) {
        tempNode = tempNode.prev;
        continue;
      }
      return tempNode;
    }
  }

  set(idx, value) {
    const validNode = this.get(idx);
    if (validNode == null) return false;
    validNode.value = value;
    return true;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(value);
    if (idx === this.length) return !!this.push(value);
    const newNode = new Node(value);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode.next;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length += 1;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    const targetNode = this.get(idx);
    const prevNode = targetNode.prev;
    const nextNode = targetNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    targetNode.prev = null;
    targetNode.next = null;
    this.length -= 1;
    return targetNode;
  }

  print() {
    const list = [];
    let tempNode = this.head;
    for (let _ = 0; _ < this.length; _++) {
      list.push(tempNode.value);
      tempNode = tempNode.next;
    }
    return list;
  }
}

// test
const dll = new DLL();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
dll.push(50);
console.log(dll.print());
console.log(dll.pop());
console.log(dll.print());
console.log(dll.tail);
console.log(dll.shift());
console.log(dll.print());
console.log(dll.head);
console.log(dll.unshift(100));
console.log(dll.unshift(200));
console.log(dll.head);
console.log(dll.print());
console.log(dll.pop());
console.log(dll.pop());
console.log(dll.print());
dll.push(11);
dll.push(22);
dll.push(33);
console.log(dll.print());
console.log(dll.get(2));
console.log(dll.get(0));
console.log(dll.get(-1));
console.log(dll.get(100));
console.log(dll.get(5));
console.log(dll.set(5, 99999));
console.log(dll.print());
console.log(dll.set(500, 99999));
console.log(dll.print());
console.log(dll.insert(3, 333));
console.log(dll.insert(7, 77));
console.log(dll.insert(100, 10000));
console.log(dll.insert(0, 100000000));
console.log(dll.print());
console.log(dll.remove(3));
console.log(dll.print());
console.log(dll.remove(-100));
console.log(dll.remove(300));
console.log(dll.remove(7));
console.log(dll.print());
