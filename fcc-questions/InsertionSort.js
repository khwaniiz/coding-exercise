function insertionSort(array) {
    // Only change code below this line
    let len = array.length

    for(let i = 1; i < len-1; i++) {
      let j =i;

      while(j>0 && array[j-1] > array[j]) {
        let temp = array[j]
        array[j] = array[j-1]
        array[j-1] = temp
        j = j-1;
      }

      
    }
    
    return array;
    // Only change code above this line
  }
  
  console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));