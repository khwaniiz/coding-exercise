function smallestCommons(arr) {
    // sort array and get total of divisors
    const [min, max] = arr.sort((a,b) => a-b)
    const numDivisors = max - min + 1;

    console.log('numDivisors', numDivisors)

    // largest possible number
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
      }
    console.log('upperBound', upperBound)

    // Test all multiples of max
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        console.log('multiple', multiple)
        let divisorsCount = 0;
        for(let i = min; i <= max; i++) {
            if(multiple % i === 0) {
                divisorsCount++;
            }
        }
        if(divisorsCount === numDivisors) {
            return multiple
        }
    }
  }
  
  
  console.log(smallestCommons([1,5]));