function bubbleSort(array) {
    // Only change code below this line
    console.log(array)
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i])
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                console.log(array[j], array[j + 1])
            }

        }
        console.log(array)

    }

    return array;
    // Only change code above this line
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
