function countingValleys(steps, path) {
    let alt = 0;
    let vales =0;
    
    for (let i = 0; i<steps; i++) {
        if (path[i]=== 'U') {
            alt++;
        }
        else if (path[i] === 'D') {
            alt--;
            if (alt === -1) {
                vales++;
            }
        }
    }
    return vales;
}
