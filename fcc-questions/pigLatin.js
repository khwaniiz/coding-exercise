function translatePigLatin(str) {
   let regex = /^[^aeiou]+/ //get longest match but vowel
   let myConsonants = str.match(regex)
   console.log(myConsonants)
   return myConsonants !== null ? str.replace(regex, '')
   .concat(myConsonants)
   .concat('ay')
   : str.concat('way')
 

  }
  
  console.log(translatePigLatin("schwartz"));