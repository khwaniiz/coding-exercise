function runningMedian(a) {

    // you have to use heap
    let sorted = [];

    for(let i = 0; i < a.length; i++) {
     
        if( i % 2 === 0) {
           sorted.push(a[i])
           sorted = sorted.sort((a,b) => a-b)
           console.log(i, sorted)
          let length = Math.round(sorted.length / 2)
           console.log('middle',sorted[length-1].toFixed(1))
        } else if( i % 2 === 1) {
            sorted.push(a[i])
            sorted = sorted.sort((a,b) => a-b)
            console.log(sorted)
            let length = Math.round(sorted.length / 2)
            console.log('middle',((sorted[length-1] + sorted[length])/2).toFixed(1))
        }
    }
    
}

console.log(runningMedian([12,4,5,3,8,7]))