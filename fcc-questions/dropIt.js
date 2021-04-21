// ES6
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
  
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 3; }));

// Resursive
function dropElements(arr, func) {
 if(arr.length === 0 || func(arr[0])) {
   return arr;
 } else {
   arr.shift()
   return dropElements(arr,func)
 }
}
  
console.log(dropElements([1, 2, 3, 4], function(n) {return n < 3; }));