export default function two_crystal_balls(breaks: boolean[]): number {
    let result: number = -1;
    let step = Math.floor(Math.sqrt(breaks.length));
    for (let i = 0; i < breaks.length; i += step) {
        if (breaks[i]) {
            result = i - step;
            break;
        }
    }
    for (let i = result; i <= result + step; i++) {
        if (breaks[i]) {
            result = i;
            break;
        }
    }
    return result;
}
