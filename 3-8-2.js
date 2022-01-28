function f (arr) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The parameter should be an array");
    }
    if (arr.length == 0) {
        return 0;
    }
    let arrNew = arr.flat(Infinity);
    var result = 0;
    for (let i=0; i<arrNew.length; i++) {
        if (typeof (arrNew[i]) == "number") {
            result = result + arrNew[i];
        } else {
            throw new Error ("The array arguments should be arrays or numbers");
        }
    }
    return result;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); //12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); //3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); //6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); //0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); //3