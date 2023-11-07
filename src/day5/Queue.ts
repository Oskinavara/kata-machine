type BinaryNode<T> = {
  value: T;
  next?: BinaryNode<T> | null;
};

export default class Queue<T> {
  public length: number;
  public head?: BinaryNode<T> | null;
  public tail?: BinaryNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  enqueue(item: T): void {
    const node = { value: item } as BinaryNode<T>;
    this.length++;

    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return undefined;
    this.length--;

    if (this.length === 0) {
      this.tail = undefined;
    }

    const oldHead = this.head;
    this.head = this.head.next;
    oldHead.next = undefined;

    return oldHead.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
