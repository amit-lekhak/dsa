class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  lookup(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value === currentNode.value) return currentNode;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  insert(value) {
    const newNode = new Node(value);
    let currentNode = null;
    if (!this.root) {
      this.root = newNode;
    } else {
      currentNode = this.root;
      while (currentNode !== null) {
        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  remove(value) {
    if (!this.root) return undefined;

    let currentNode = this.root;
    let prevNode = null;
    let direction = null;

    while (currentNode !== null) {
      if (value === currentNode.value) {
        if (!currentNode.left && !currentNode.right) {
          if (currentNode === this.root) {
            this.root = null;
            return;
          }
          prevNode[direction] = null;
        } else if (!currentNode.left) {
          prevNode[direction] = currentNode.right;
        } else if (!currentNode.right) {
          prevNode[direction] = currentNode.left;
        } else {
          let temp = currentNode.right;
          let prevTemp;
          if (!temp.left) {
            prevNode[direction] = temp;
            prevNode[direction].left = currentNode.left;
            return;
          } else {
            while (temp.left !== null) {
              prevTemp = temp;
              temp = temp.left;
            }
            prevTemp.left = temp.right;
            prevNode[direction] = temp;
            prevNode[direction].left = currentNode.left;
            prevNode[direction].right = currentNode.right;
          }
        }
      }

      if (value < currentNode.value) {
        prevNode = currentNode;
        direction = 'left';
        currentNode = currentNode.left;
      } else {
        prevNode = currentNode;
        direction = 'right';
        currentNode = currentNode.right;
      }
    }
  }
}

const bst = new BST();
bst.insert(100);
bst.insert(50);
bst.insert(75);
bst.insert(2);
bst.insert(200);
bst.insert(220);
bst.insert(210);
bst.insert(211);
bst.insert(209);
bst.insert(230);
bst.insert(175);

// bst.remove(50);
// bst.remove(75);
// bst.remove(2);
bst.remove(200);
// bst.remove(220);
// bst.remove(175);

console.log(bst);
console.log(bst.lookup(50));
