type Node<T> = {
    value: T;
    next?: Node<T>;
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
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.next = node;
        this.head = node;
    }
    deque(): T | undefined {
        if (!this.tail) return;
        this.length--;
        const tail = this.tail;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return tail.value;
        }

        this.tail = this.tail.next;
        return tail?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
