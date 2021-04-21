function sumPrimes(num) {
    // function isPrime(num) {
    //     for(let i = 2; i <= Math.sqrt(num); i++) {
    //         if(num % i === 0) {
    //             return false
    //         }      
    //     }

    //     return true;
    // }

    // let sum = 0;
    // for(let i = 2; i <= num; i++) {
    //     if(isPrime(i))
    //     sum += i;
    // }

    // return sum;

    // Solution 2

    let primes = []

    for(let i = 2; i <=num; i++) {
        if(primes.every((prime) => i % prime !== 0)) 
        primes.push(i)
    }

    return primes.reduce((sum, prime) => sum + prime, 0)
}
  
  console.log(sumPrimes(10));