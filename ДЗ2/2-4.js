function f(n) {
    if (typeof n !== "number") {
        throw new Error ("parameter type is not a Number");
    } else {
        if (n<1 || n>7) {
            throw new Error ("parameter should be in the range of 1 to 7");
        } else {
            switch (n) {
                case 1: console.log("Воскресенье");
                break;
                case 2: console.log("Понедельник");
                break;
                case 3: console.log("Вторник");
                break;
                case 4: console.log("Среда");
                break;
                case 5: console.log("Четверг");
                break;
                case 6: console.log("Пятница");
                break;
                case 7: console.log("Суббота");
                break;
            }
        }
    }
}

f(1); 
f(2); 
f(8); 
// f('1'); 