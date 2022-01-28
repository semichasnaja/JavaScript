function arrayFill (arg, cnt) {
    if (typeof(arg) != "number" && typeof(arg) != "string" && typeof(arg) != "object" && Array.isArray(arg) == false) {
        throw new Error ("The first argument should be number, string, object or array");
    }
    if (typeof(cnt) != "number") {
        throw new Error ("The second argument should be number");
    }
    let arr = new Array(cnt);
    for (let i=0; i<arr.length; i++) {
        arr[i] = arg;
    }
    return arr;
}

console.log (arrayFill('x',5));