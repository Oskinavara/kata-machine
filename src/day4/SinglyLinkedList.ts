export default class SinglyLinkedList<T> {
  public length: number;
  public head: BinaryNode<T>;

  constructor() {
    this.head = T;
  }

  prepend(item: T): void {}
  insertAt(item: T, idx: number): void {}
  append(item: T): void {}
  remove(item: T): T | undefined {}
  get(idx: number): T | undefined {}
  removeAt(idx: number): T | undefined {}
}
