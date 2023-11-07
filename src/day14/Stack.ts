type Node<T> = {
    value: T;
    prev: Node<T>;
    next: Node<T>;
};
export default class Stack<T> {
    public length: number;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.tail = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = node;
            return;
        }

        this.tail.prev = node;
        node.next = this.tail;
        this.tail = node;
    }
    pop(): T | undefined {
        if (!this.tail) return;

        this.length--;
        const tail = this.tail;

        if (this.length === 0) {
            this.tail = undefined;
            return tail?.value;
        }

        this.tail = this.tail.next;
        return tail?.value;
    }
    peek(): T | undefined {
        return this.tail?.value;
    }
}
