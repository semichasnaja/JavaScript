function forEach (arr, func) {
    if (Array.isArray(arr) == false) {
        throw new Error ("The first parameter should be an array");
    }
    if(typeof(func) !== "function"){
        throw new Error ("The second parameter should be a function");
    }
    for (let i=0; i<arr.length; i++) {
        func(arr[i], i, arr);
    }
}

const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
// forEach(arr, console.log);