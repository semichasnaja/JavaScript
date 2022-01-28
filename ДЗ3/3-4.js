function some (arr, func) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The first parameter should be an array");
    }
    if(typeof(func) !== "function"){
        throw new Error ("The second parameter should be a function");
    }
    for (let i=0; i<arr.length; i++) {
        if (func(arr[i])) {
            return true; 
        }
    }
    return false;
}

const arr = [1,2,3];
some(arr, function(item, i, arr) {});

// const arr1 = [2, 5, 8, 1, 4];
// const arr2 = [1, 5, 8, 12, 4];
// function test (a) {
//     return a>10;
// }
// console.log (some(arr1, test)); // false
// console.log (some(arr2, test)); // true