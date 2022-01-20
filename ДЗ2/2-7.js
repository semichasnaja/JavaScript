function getDivisors (n) {
    if (typeof n !== "number") {
        throw new Error ("parameter type is not a Number");
    } else {
        if (n<0){
            throw new Error ("parameter can't be less than 0");
        }
        else {
            if (n==0){
                throw new Error ("parameter can't be a 0");
            } else {
                let arr = [];
                for (let i=1; i<=n; i++){
                    if (n % i == 0) {
                        arr.push(i);
                    }
                }
                return arr;
            }
        }
    }
}

console.log(getDivisors(12));
console.log(getDivisors(0));
// console.log(getDivisors('Content'));