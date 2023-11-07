function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path;

    path.push(curr.value);

    walk(curr.left, path);
    walk(curr.right, path);

    return path;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    const result = walk(head, path);
    console.log(result);
    return result;
}
