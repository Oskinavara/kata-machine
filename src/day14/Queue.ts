type Node<T> = {
    value: T;
    prev: Node<T>;
};
export default class Stack<T> {
    public length: number;
    public tail?: Node<T>;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
        this.tail = this.head = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.prev = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return;

        this.length--;
        const head = this.head;

        if (this.length === 0) {
            this.head = undefined;
            return head?.value;
        }

        this.head = this.head.prev;
        return head?.value;
    }
    peek(): T | undefined {
        return this.tail?.value;
    }
}
