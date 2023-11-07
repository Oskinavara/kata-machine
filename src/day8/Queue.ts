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
            this.head = this.tail = node;
            return;
        }
        console.log(this.tail)
        this.tail.prev = node;
        console.log(this.tail)
        
        this.tail = node;
        console.log(this.tail.prev)
    }
    deque(): T | undefined {
        if (!this.head) return;
        this.length--;

        const head = this.head as Node<T>;

        if (this.length === 0) {
            this.tail = undefined;
        }
        this.head = this.head?.prev;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
