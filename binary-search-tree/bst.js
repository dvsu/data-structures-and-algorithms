const Node = require("./node");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let compNode = this.root;

    while (true) {
      // skip the insertion if value exists in the tree
      if (value === compNode.value) return;
      if (value > compNode.value) {
        if (compNode.right === null) {
          compNode.right = new Node(value);
          break;
        }
        compNode = compNode.right;
        continue;
      }
      if (compNode.left === null) {
        compNode.left = new Node(value);
        break;
      }
      compNode = compNode.left;
    }
  }

  includes(value) {
    if (this.root === null) return false;

    let compNode = this.root;

    while (true) {
      if (value === compNode.value) return true;
      if (value > compNode.value) {
        if (compNode.right === null) return false;
        compNode = compNode.right;
        continue;
      }
      if (compNode.left === null) return false;
      compNode = compNode.left;
    }
  }

  findPath(value) {
    const path = [];
    if (this.root === null) return null;

    let compNode = this.root;

    while (true) {
      path.push(compNode.value);
      if (value === compNode.value) return path;

      if (value > compNode.value) {
        if (compNode.right === null) return null;
        compNode = compNode.right;
        continue;
      }
      if (compNode.left === null) return null;
      compNode = compNode.left;
    }
  }
}

// hard-coded insertion
const bst = new BinarySearchTree();
bst.root = new Node(15);
bst.root.left = new Node(10);
bst.root.right = new Node(20);
bst.root.left.left = new Node(5);
bst.root.left.right = new Node(12);

console.log(bst);

const bst2 = new BinarySearchTree();
bst2.insert(20);
bst2.insert(10);
bst2.insert(3);
bst2.insert(28);
bst2.insert(11);
bst2.insert(45);
bst2.insert(10); // skip insertion
bst2.insert(30);
bst2.insert(25);
bst2.insert(27);
bst2.insert(26);

console.log(JSON.stringify(bst2, null, 2));

// visualized output
//          20
//        /    \
//       10    28
//      /  \   /  \
//     3  11 25   45
//            \   /
//            27 30
//            /
//           26

console.log(bst2.includes(3));
console.log(bst2.includes(33));
console.log(bst2.findPath(3)); // [ 20, 10, 3 ]
console.log(bst2.findPath(27)); // [ 20, 28, 25, 27 ]
console.log(bst2.findPath(33)); // null
console.log(bst2.findPath(26)); // [ 20, 28, 25, 27, 26 ]
console.log(bst2.findPath(30)); // [ 20, 28, 45, 30 ]
