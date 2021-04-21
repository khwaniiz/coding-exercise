// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

const getPermutations = arr => {
    const output = []
    const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA]
        arrToSwap[indexA] = arrToSwap[indexB]
        arrToSwap[indexB] = temp
    }

    const generate = (n, heapArr) => {
        if (n === 1) {
            output.push(heapArr.slice())
            return
        }

        generate(n - 1, heapArr)

        for (let i = 0; i < n - 1; i++) {
            // n is even
            if (n % 2 === 0) {
                swapInPlace(heapArr, i, n - 1)
            } else {
                swapInPlace(heapArr, 0, n - 1)
            }

            generate(n - 1, heapArr)
        }
    }

    generate(arr.length, arr.slice())

    return output
}

function permAlone(str) {

    const arr = [...str]
    const perms = getPermutations(arr)
    console.log('perm', perms)

    let count = 0;

    for (const perm of perms) {
        console.log(perm)
        let hasRepeat = false

        for (let i = 0; i < perm.length - 1; i++) {
            if (perm[i] === perm[i + 1]) {
                console.log(i, perm[i], perm[i + 1])
                hasRepeat = true
                break
            }

        }

        if (!hasRepeat) {
            count++
            console.log('count', count)
        }
    }

    return count
}



console.log(permAlone('aab'));

    //    https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-no-repeats-please/16037/16

    //https://www.youtube.com/watch?v=xghJNlMibX4

    // https://www.youtube.com/watch?v=NslHdsQer0I