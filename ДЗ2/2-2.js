function f() {
    let summa = 0;
    for (var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== "number") {
            throw new Error ("all parameters type should be a Number");
        } else {
            summa = summa + arguments[i];
        }
      }
      return summa;
}

console.log(f(1,2,3));
console.log(f(1,1,1,1,1,1,1,1));
console.log(f(1,2,'s',4));