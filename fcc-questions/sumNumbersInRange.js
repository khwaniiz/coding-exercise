function sumAll(arr) {
    let sum = 0;

    for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum+=i
    }

    return sum
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([10, 5]));