function convertHTML(str) {

    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;"
    }

    return str.split('').map(e => htmlEntities[e] || e).join('')
    //console.log(str)



  }
  
  console.log(convertHTML("Dolce & Gabbana"));