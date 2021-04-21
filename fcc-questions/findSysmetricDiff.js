// First Solution

// function sym(args) {

//     let arrays = Array.prototype.slice.call(arguments);
//     let combined = arrays.reduce(diff)

//     function diff(arr1, arr2) {
//         let unique = [];
//         arr1.forEach((elem, index) => {
//             if (!arr2.includes(elem) && !unique.includes(elem)) {
//                 unique.push(elem)

//             }
//         })

//         arr2.forEach((elem, index) => {
//             if (!arr1.includes(elem) && !unique.includes(elem)) {
//                 unique.push(elem)
//             }
//         })

//         return unique.sort();
//     }

//     return combined
// }

// Rewrite

function sym(args) {
    let arrays = Array.prototype.slice.call(arguments);
    const diff = arrays.reduce((arr1, arr2) => {
        return arr1.filter(i => arr2.indexOf(i) === -1).concat(arr2.filter(i => arr1.indexOf(i) === -1))
    })

    // remove duplicate
    return diff.filter((elem, index) => {
        return diff.indexOf(elem) === index
    });
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));





