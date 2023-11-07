type Node<T> = {
    value: T;
    prev: Node<T>;
    next: Node<T>;
};
export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        this.head.next = node;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) return;
        this.length--;

        const head = this.head as Node<T>;

        if (this.length === 0) {
            this.head = undefined;
            return head.value;
        }
        this.head = head.prev;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}