var arr = [1,2,3,-5,-2,1,-4];
var result = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result = result + arr[i];
    }
}
console.log(result);