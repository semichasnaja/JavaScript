function reverse (arr) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The parameter should be an array");
    }
    if (arr.length == 0) {
        throw new Error ("The array is empty");
    }
    let arrNew = new Array(arr.length);
    for (let i=0, j=(arrNew.length-1); j>=0; j--, i++) {
        arrNew[j] = arr[i];
        }
    return arrNew;
}


const arr = [3,2,1];
console.log (reverse(arr));