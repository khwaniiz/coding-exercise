function truncateSentence(s, k) {
   let str = s.split(' ');
   return str.slice(0,k).join(' ')
};

console.log(truncateSentence("What is the solution to this problem", 4))