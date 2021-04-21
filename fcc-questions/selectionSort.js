// find min in each loop and then swap with the current i
function swap(x, y, arr) {
    let temp = arr[x];
    arr[x] =  arr[y];
    arr[y] = temp;

}
function selectionSort(array) {
    // Only change code below this line
    let len = array.length
    
   for(let i = 0 ; i < len-1 ; i++) {
       let min = i;
       for(let j = i+1; j < len; j++) {
        if(array[min] > array[j]) min = j;
       }

       swap(i, min, array)
   }

       
    return array;
    // Only change code above this line
  }
  
  
  console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
