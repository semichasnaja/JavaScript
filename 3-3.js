function every (arr, func) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The first parameter should be an array");
    }
    if(typeof(func) !== "function"){
        throw new Error ("The second parameter should be a function");
    }
    for (let i=0; i<arr.length; i++) {
        if (!func(arr[i])) {
            return false; 
        }
    }
    return true;
}

const arr = [1,2,3];
every(arr, function(item, i, arr) {});

// const arr1 = [12, 5, 8, 130, 44];
// const arr2 = [12, 54, 18, 130, 44];
// function test (a) {
//     return a>=10;
// }
// console.log (every(arr1, test)); // false
// console.log (every(arr2, test)); // true