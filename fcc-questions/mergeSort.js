function mergeSort(array) {
    // Only change code below this line
    if(array.length === 1) {
        return array
    } else {
        const middle = Math.floor(array.length/2)
        return merge(
            mergeSort(array.slice(0, middle)),
            mergeSort(array.slice(middle))
        )
    }

    function merge(arr1, arr2) {
        let merged = []
  
        while(arr1.length && arr2.length) {
            if(arr1[0] < arr2[0]) {
                merged.push(arr1.shift())
            } else if(arr1[0] > arr2[0]) {
                merged.push(arr2.shift())
            } else {
                merged.push(arr1.shift(), arr2.shift())
            }
        }

        return [...merged, ...arr1, ...arr2]
    }
    
  }

  
  
  console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));