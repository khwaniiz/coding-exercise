function diffArray(arr1, arr2) {
    var newArr = [];
    
    newArr = arr1.concat(arr2);
    return  newArr.filter(arr => !arr1.includes(arr) || !arr2.includes(arr))

  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));