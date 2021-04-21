// source: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise


function pairwise(arr, arg) {
    let foundIndex = []
    let total = 0;


    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] + arr[j] === arg && !foundIndex.includes(i) && !foundIndex.includes(j)) {
                    Array.prototype.push.apply(foundIndex, [i, j])
                    console.log(foundIndex)
                    total += i + j
                }
            }

        }
    }
    return total

}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));



