function sumFibs(num) {

    // Loop 
if(num === 1) return 0;
if(num === 2) return 1;

let prev = 0;
let cur = 1;
let sum;

for(let i = 2; i < num; i++) {
    sum = prev + cur;
    prev = cur;
    cur = sum;
}

return cur

}

    // Recursion

function sumFibsRecursion(num) {

    if(num === 1) return 0; 
    if(num === 2) return 1;

    return sumFibs(num-1) + sumFibs(num-2)
}
  
console.log('Loop', sumFibs(5)); 
console.log('Recursion', sumFibsRecursion(5)); 