function filter (arr, func) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The first parameter should be an array");
    }
    if(typeof(func) !== "function"){
        throw new Error ("The second parameter should be a function");
    }
    let arrNew = [];
    let counter = 0;
    for (let i=0; i<arr.length; i++) {
        if (func(arr[i])) {
            arrNew[counter] = arr[i];
            counter++;
        }
    }
    return arrNew;
}

const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
// function test (a) {
//     return a<3;
// }
// console.log (filter(arr, test));