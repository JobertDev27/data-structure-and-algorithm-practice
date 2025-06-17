class List {
  constructor(root, tail) {
    root = null;
    tail = null;
  }

  append(value) {
    if (!this.root) {
      const item = new Item();
      item.value = value;
      this.head = item.value;
    }
  }

  head() {
    return this.root;
  }
}

class Item {
  constructor(value, next) {
    value = null;
    next = null;
  }
}
