function quickSort(array) {
    // Only change code below this line
    if(array.length === 0) {
        return []
    } else {
        const pivotVal = array[0]

        let left = []
        let equal = []
        let right = []

        for (let elem of array) {
            if(elem < pivotVal) {
                left.push(elem)
            } else if (elem > pivotVal) {
                right.push(elem)
            } else {
                equal.push(elem)
            }
        }

        return [...quickSort(left), ...equal, ...quickSort(right)]
    }

    return array;
    // Only change code above this line
  }
  
  console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))