function compareTriplets(a, b) {
    
    let pontos = [0,0]
    for (let i=0; i<a.length;i++) {
        if(a[i]>b[i]) {
            pontos[0] +=1
        }
        if(a[i]<b[i]) {
            pontos[1] += 1
        }
    }
    return pontos
}
