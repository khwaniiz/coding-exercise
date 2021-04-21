function destroyer(arr, ...num) {

    let destroyItem = [...num];

   return  arr.filter(item => !destroyItem.includes(item))

// Using Argument

let args = Array.from(arguments).slice(1);
return arr.filter(item => !args.includes(item))

  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));