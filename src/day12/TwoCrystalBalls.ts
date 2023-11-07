export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));

    let result = -1;

    for (let i = 0; i < breaks.length; i += step) {
        if (breaks[i]) {
            result = i - step;
            break;
        }
    }
    console.log(result);
    for (let i = result; i < breaks.length; i++) {
        if (breaks[i]) {
            result = i;
            break;
        }
    }

    return result;
}
