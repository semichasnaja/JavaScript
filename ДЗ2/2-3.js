function f(a, b, c) {
    if (typeof a !== "number") {
        throw new Error ("all parameters type should be a Number");
    } else {
        if (typeof b !== "number") {
            throw new Error ("all parameters type should be a Number");
        } else {
            if (typeof c !== "number") {
                throw new Error ("all parameters type should be a Number");
            } else {
                return (a-b)/c;
            }
        }
    }  
}

console.log(f(9,3,2));
console.log(f('s',9,3));