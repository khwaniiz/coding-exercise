function whatIsInAName(collection, source) {
   // Object to array
   let srcKeys = Object.keys(source)
   //console.log(srcKeys)

return collection.filter(obj => 
    srcKeys.every(key => 
        obj.hasOwnProperty(key) && obj[key] === source[key]))
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));