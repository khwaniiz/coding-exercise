function myReplace(str, before, after) {

    if(before.charAt(0) === before.charAt(0).toUpperCase()) {
        return str.replace(before, after.charAt(0).toUpperCase()+after.slice(1))
    } else if(before.charAt(0) === before.charAt(0).toLowerCase()) {
        return str.replace(before, after.charAt(0).toLowerCase()+after.slice(1))
    } else {
        return str.replace(before, after)
    }
    
   
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"));