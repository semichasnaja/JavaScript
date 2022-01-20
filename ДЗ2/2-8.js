function f (arr) {
    if (arr.length == 0) {
        throw new Error ("parameter can't be an empty");
    }
    if (Array.isArray(arr) == false) {
        throw new Error ("parameter type should be an array");
    }
    console.log(arr[0]);
    arr.splice (0,1);
    if (arr.length == 0){
        return;
    } else{
        f(arr);
    }
}

// f([]);
// f('Content');
// f(1,2,3);
f([1,2,3]);