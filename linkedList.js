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

  head() {
    return this.root.getValue();
  }

  tail() {
    return this.end.getValue();
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
list.append("hello");
console.log(list.head());
console.log(list.tail());
list.append("hi");
console.log(list.head());
console.log(list.tail());
