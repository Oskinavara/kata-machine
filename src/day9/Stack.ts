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
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) return;

        this.length--;
        const head = this.head;

        if (this.length === 0) {
            this.head = undefined;
            return head?.value;
        }

        this.head = this.head.next;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
