type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    public tail?: Node<T>;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    printList(): void {
        if (!this.head) return;
        let curr = this.head;
        for (let i = 0; curr; i++) {
            console.log(`i: ${i} - val: ${curr.value}`);
            curr = curr.next!;
        }
        console.log(`HEAD: ${this.head.value}`);
        console.log(`TAIL: ${this.tail?.value}`);
    }

    get(idx: number): T | undefined {
        let curr = this.traverse(idx);
        if (!curr) return;
        return curr?.value;
    }

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.tail = this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {}
    remove(item: T): T | undefined {
        if (!this.head) return;
        let curr = this.head;
        let node: T | undefined;

        for (let i = 0; i < this.length; i++) {
            if (curr.value === item) {
                node = this.removeCurrentNode(curr);
                break;
            }
        }
        return node;
    }

    traverse(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            if (!curr) return;
            curr = curr?.next;
        }

        return curr;
    }
    removeCurrentNode(curr: Node<T>): T | undefined {
        if (!curr) return;
        console.log("TeSTEST");
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return curr.value;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }
        if (curr.next) {
            curr.next.prev = curr.prev;
        }
        if (curr === this.head) {
            this.head = curr.next;
        }
        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.next = curr.prev = undefined;
        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        const curr = this.traverse(idx);
        if (!curr) return;

        return this.removeCurrentNode(curr);
    }
}
