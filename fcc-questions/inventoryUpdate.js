function updateInventory(arr1, arr2) {

    // iterate item in array to check that if arr1 is in arr2?
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < arr1.length; j++) {
            // if match then add quantity
            if (arr1[j][1].indexOf((arr2[i][1])) !== -1) {
                arr1[j][0] += arr2[i][0]
                found = true;
            }
        }

        if (found === false) {
            arr1.push(arr2[i])
        }

    }
    arr1.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        return 1;
    });
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
