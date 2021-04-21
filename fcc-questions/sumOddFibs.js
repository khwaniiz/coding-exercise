function sumFibs(num) {

  // Loop 
if(num === 1) return 0;
if(num === 2) return 1;

let prev = 0;
let cur = 1;
let sum = 0;


while(cur <= num) {
  if(cur % 2 !== 0) {
    sum += cur;
  }

  cur = cur + prev;
  prev = cur - prev
  console.log('prev',prev, 'cur', cur, 'sum', sum)
}


return sum

}


console.log('Loop', sumFibs(10)); 
//console.log('Recursion', sumOodFibsRecursion(5)); 