export default class Queue<T> {
  public length: number;
  private head?: BinaryNode<T> | null;
  private tail?: BinaryNode<T> | null;

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
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;
    head.next = null;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const queue = new Queue<number>();
queue.enqueue(10);
queue.peek();
