function merge(intervals) {
    console.log('original',intervals)
    if(!intervals) return;
    if(intervals.length === 1) return intervals

    intervals.sort((a,b) => a[0] - b[0])

    const isOverlap = (intervalA, intervalB) => {
        return intervalA[1] >= intervalB[0]
    }

    const mergeTwo = (intervalA, intervalB) => {
        return [Math.min(intervalA[0], intervalB[0]), Math.max(intervalA[1], intervalB[1])]
    }

    let i = 1;
    while(i < intervals.length) {
      if(isOverlap(intervals[i-1], intervals[i])) {
          intervals.splice(i-1, 2, mergeTwo(intervals[i-1], intervals[i]))
      } else {
          i++
      }
  }


return intervals

};

console.log(merge(
    [[1,4],[0,0]]))