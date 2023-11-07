const qs = (arr: number[], lo: number, hi: number) => {
    if (lo >= hi) return;
    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
};

const partition = (arr: number[], lo: number, hi: number) => {
    let pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }

    idx++;

    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
