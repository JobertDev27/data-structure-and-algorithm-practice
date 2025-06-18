class List {
  constructor() {
    this.root = null;
    this.end = null;
  }

  append(value) {
    const item = new Item();
    item.setValue(value);

    if (!this.root) {
      this.root = item;
      this.end = item;
    }
    this.end.setNext(item);
    this.end = item;
  }

  prepend(value) {
    const item = new Item();
    item.setValue(value);

    if (!this.root) {
      this.root = item;
    }

    item.setNext(this.root);
    this.root = item;
  }

  head() {
    return this.root.getValue();
  }

  tail() {
    return this.end.getValue();
  }

  size() {
    if (!this.root) return "List is empty";
    let amount = 1;
    let currItem = this.root;

    while (currItem.getNext()) {
      amount += 1;
      currItem = currItem.getNext();
    }
    return amount;
  }

  at(index) {
    if (!this.root) return "List is empty";

    let currItem = this.root;
    let currIndex = 0;

    while (currItem) {
      if (currIndex === index) return currItem.getValue();
      currItem = currItem.getNext();
      currIndex += 1;
    }

    return "Index out of bounds";
  }

  pop() {
    let currItem = this.root;
    let prevItem = this.root;
    while (currItem) {
      if (!currItem.getNext()) {
        this.end = prevItem;
        return prevItem.setNext(null);
      }
      prevItem = currItem;
      currItem = currItem.getNext();
    }
  }

  find(value) {
    if (!this.root) return "List is empty";

    let currItem = this.root;
    let currIndex = 0;

    while (currItem) {
      if (currItem.getValue() === value) return currIndex;
      currItem = currItem.getNext();
      currIndex += 1;
    }

    return "Value not found";
  }

  toString() {
    if (!this.root) return "List is empty";
    let currItem = this.root;
    let listText = this.root.getValue();

    while (currItem.getNext()) {
      listText += " -> ";
      currItem = currItem.getNext();
      listText += currItem.getValue();
    }
    listText += " -> null";
    return listText;
  }
}

class Item {
  constructor() {
    this.value = null;
    this.next = null;
  }

  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setNext(value) {
    this.next = value;
  }

  getNext() {
    return this.next;
  }
}

const list = new List();
console.log(list.size());
list.append("hello");
console.log(list.head());
console.log(list.tail());
list.append("hi");
console.log(list.head());
console.log(list.tail());
list.prepend("hey");
console.log(list.head());
console.log(list.tail());
console.log(list.size());
console.log(list.toString());
console.log(list.at(2));
console.log(list.find("hey"));
list.pop();
console.log(list.toString());
console.log(list.tail());
