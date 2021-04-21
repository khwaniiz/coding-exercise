function simplifyPath(path) {
    let paths = path.split('/')
    console.log(paths)
    let result = []
  
    for(let i = 0; i < paths.length; i++) {
        const path = paths[i];
        if(path === '..') result.pop()
        else if(path !== '.' && path.length > 0) result.push(path)
    }
    
    return `/${result.join('/')}`
};

console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/a/./b/../../c/'))
console.log(simplifyPath('/../'))