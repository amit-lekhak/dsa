class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  prepend = (value) => {
    const newValue = {
      value: value,
      next: null,
    };

    newValue.next = this.head;
    this.head = newValue;

    this.length++;
  };

  append = (value) => {
    const newValue = {
      value: value,
      next: null,
    };

    this.tail.next = newValue;
    this.tail = newValue;

    this.length++;
  };

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  insert(index, value) {
    let currentIndex = 0;
    let currentNode = this.head;
    let previousNode;

    const newValue = {
      value: value,
      next: null,
    };

    while (currentNode !== null) {
      /** 
       * while(currentIndex !== index - 1){
       * currentNode = currentNode.next;
       * currentIndex++;
       * }
       * 
       * newValue.next = currentNode.next;
        currentNode.next = newValue;
      */
      if (currentIndex === index) {
        newValue.next = previousNode.next;
        previousNode.next = newValue;
        this.length++;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  reverse() {
    if (this.length === 0) return;
    if (this.length === 1) return this.head;

    let newLinkedArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      newLinkedArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    this.head = {
      value: newLinkedArray[0],
      next: null,
    };

    this.tail = this.head;

    for (let i = 1; i < newLinkedArray.length; i++) {
      this.prepend(newLinkedArray[i]);
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(2);

myLinkedList.insert(2, 100);

console.log(myLinkedList.printList());

myLinkedList.reverse();

console.log(myLinkedList);

// ===============================================================

// const a = { value: 5, next: { value: 10, next: { value: 15, next: null } } };

// currentNode = this.head;
// this.tail = this.head;
// nextNode = currentNode.next;

// while (nextNode !== null) {
//   const temp = nextNode.next;

//   nextNode.next = currentNode;
//   currentNode = nextNode;
//   nextNode = temp;
// }

// this.head.next = null;
// this.head = currentNode;
