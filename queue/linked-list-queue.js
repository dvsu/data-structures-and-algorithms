class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  put(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
  }

  get() {
    if (!this.size) return null;
    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    if (this.size === 1) {
      this.last = null;
    }
    this.size -= 1;
    return temp.value;
  }
}

const queue = new Queue();
queue.put("alpha");
queue.put("bravo");
queue.put("charlie");
queue.put("delta");
queue.put("echo");
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.put("foxtrot");
console.log(queue.get());
console.log(queue.get());
