function reduceRight (arr, func, initialValue) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The first parameter should be an array");
    }
    if(typeof(func) !== "function"){
        throw new Error ("The second parameter should be a function");
    }
    if (typeof(initialValue) !== "number" && typeof(initialValue) !== "string") {
        throw new Error ("The third parameter should be a number or string");
    }
    let accumulator = initialValue;
    for (let i=arr.length-1; i>=0; i--) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
}

const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);

// const arr1 = [0, 1, 2, 3, 4];
// function test (a, b) {
//     return a+b;
// }
// console.log (reduceRight(arr1, test, acc));