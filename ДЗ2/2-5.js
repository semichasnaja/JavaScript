function isPositive (n) {
    if (typeof n !== "number") {
        throw new Error ("parameter type is not a Number");
    } else {
       return (n>0) ? true : false;
    }
}

let arr = [1, 2, -4, 3, -9, -1, 7];
let newArr = [];
for (let i=0; i<arr.length; i++) {
    if (isPositive(arr[i]) == true) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);