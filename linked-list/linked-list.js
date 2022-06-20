import { LinkedListPrint } from "./linked-list-print.js";
import { Node } from "./node.js";

class LinkedList extends LinkedListPrint {
  constructor(options = { logging: false }) {
    super(options);
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.printInitial();
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    this.printPush(data);
    return true;
  }

  // remove the last node
  pop() {
    if (!this.length) return;

    let prevNode = this.head;
    let tempNode = this.head;

    while (tempNode.next) {
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;

    this.length--;

    // empty both head and tail if the length is zero
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    this.printPop(tempNode.data);
    return tempNode;
  }

  // remove the first node
  shift() {
    if (!this.length) {
      this.printShift();
      return;
    }
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    oldHead.next = null;
    this.printShift(oldHead.data);
    return oldHead;
  }

  // add a node to the start of list
  unshift(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = newNode;
    }
    this.length++;
    this.printUnshift(data);
    return true;
  }

  getNthNode(index, options = { rootMethod: "GET" }) {
    const method = options.rootMethod;
    if (index > this.length - 1 || index < 0) {
      this.printGet(index, null);
      return;
    }
    let tempNode = this.head;
    for (let i = 0; i < index; i++) {
      tempNode = tempNode.next;
    }
    if (method === "GET") this.printGet(index, tempNode.data);

    return tempNode;
  }

  setNthNode(index, data) {
    const targetNode = this.getNthNode(index, { rootMethod: "SET" });

    this.printSet(index, data);
    if (targetNode) {
      targetNode.data = data;
      return true;
    }
    return false;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(data, { rootMethod: "INSERT" });
    if (index === this.length)
      return !!this.push(data, { rootMethod: "INSERT" });
    const newNode = new Node(data);
    const prevNode = this.getNthNode(index - 1, { rootMethod: "INSERT" });
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;
    this.printInsert(index, data);
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.shift({ rootMethod: "REMOVE" });
    if (index === this.length - 1) return this.pop({ rootMethod: "REMOVE" });
    const prevNode = this.getNthNode(index - 1);
    const targetNode = prevNode.next;
    const nextNode = this.getNthNode(index + 1);
    prevNode.next = nextNode;
    this.length--;
    this.printRemove(index, targetNode.data);
    return targetNode;
  }

  reverse() {
    if (this.length <= 1) {
      this.printReverse();
      return;
    }
    let oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
    let newNext;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      newNext = oldHead.next;
      oldHead.next = prev;
      prev = oldHead;
      oldHead = newNext;
    }

    this.printReverse();
  }
}

export { LinkedList };
