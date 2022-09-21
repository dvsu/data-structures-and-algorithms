class Queue {
  constructor() {
    this.q = [];
  }

  put(value) {
    this.q.push(value);
  }

  get() {
    return this.q.shift();
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
console.log(queue.get());
