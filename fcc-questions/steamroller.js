function steamrollArray(arr) {
   const stack = [...arr];
   const result = [];

   while(stack.length) {
     let next = stack.pop()
     console.log(next)
     if(Array.isArray(next)) {
       stack.push(...next)
     } else {
       result.push(next)
     }
   }

   return result.reverse()

  
  }
  
console.log(steamrollArray([1, {}, [3, [[4]]]]));