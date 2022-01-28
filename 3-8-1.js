function f (arr) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The parameter should be an array");
    }
    if (arr.length == 0) {
        return 0;
    }
    var result = 0;
    function f1 (arr) {
        for (let i=0; i<arr.length; i++) {
            if (typeof (arr[i]) == "number") {
                result = result + arr[i];
            } else {
                if (Array.isArray(arr[i]) == true) {
                    f1(arr[i].flat());
                } else {
                    throw new Error ("The array arguments should be arrays or numbers");
                }
            }
        }
        return result;
    }
    return result;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr));