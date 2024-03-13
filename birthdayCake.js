function birthdayCakeCandles(candles) {
    let m = 0;
    let u = 0;
    for (let i =0; i < candles.length; i++) {
        if(candles[i] > m) {
            m = candles[i];
            u = 1;
        }
        else if (candles[i]===m) {
            u++;
        }
    }
    return u;
