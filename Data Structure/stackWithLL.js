class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);
    let prev;

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      prev = this.top;
      this.top = newNode;
      this.top.next = prev;
    }

    this.length++;
  }
  pop() {
    // let currentNode = this.bottom;
    // let prevNode;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    }

    this.top = this.top.next;

    // while (currentNode.next !== null) {
    //   prevNode = currentNode;
    //   currentNode = currentNode.next;
    // }

    // prevNode.next = null;
    // this.top = prevNode;
    this.length--;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');

console.log(myStack);
console.log(myStack.peek());

myStack.pop();
console.log(myStack);

//Discord
//Udemy
//google
