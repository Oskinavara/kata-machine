import Queue from "./Queue";
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = new Queue<BinaryNode<number> | null>();
    // const q: (BinaryNode<number> | undefined | null)[] = [head];
    q.enqueue(head);
    while (q.length) {
        const curr = q.deque();

        if (!curr) {
            continue;
        }

        if (curr.value === needle) {
            return true;
        }

        q.enqueue(curr.left);
        q.enqueue(curr.right);
    }
    return false;
}
