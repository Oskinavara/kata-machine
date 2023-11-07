type Node<T> = {
    value: T;
    prev: Node<T>;
};
export default class Stack<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.prev = node;
        this.tail = node;
    }
    deque(): T | undefined | null {
        if (!this.head) return undefined;

        this.length--;

        const head = this.head;

        if (this.length === 0) {
            this.tail = this.head = undefined;
            return head.value;
        }

        this.head = this.head.prev;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
