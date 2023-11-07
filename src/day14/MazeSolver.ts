const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];
const walk = (
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    path: Point[],
    seen: boolean[][],
) => {
    if (
        curr.x < 0 ||
        curr.y < 0 ||
        curr.x >= maze[0].length ||
        curr.y >= maze.length
    ) {
        return false;
    }
    if (seen[curr.y][curr.x]) {
        return false;
    }
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, path, seen)
        ) {
            return true;
        }
    }

    path.pop();
    return false;

    // is end, is seen, is wall,
    // if()
};

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let path: Point[] = [];
    let seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    for (let i = 0; i < maze.length; i++) {
        walk(maze, wall, start, end, path, seen);
    }

    return path;
}
