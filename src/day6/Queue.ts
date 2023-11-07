type Node<T> = {
  value: T;
  prev: Node<T>;
};

export default class Queue<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.prev = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return undefined;
    this.length--;

    if (this.length === 0) {
      this.tail = undefined;
    }

    const head = this.head;
    this.head = this.head.prev;
    // head.prev = undefined as Node<T>;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
