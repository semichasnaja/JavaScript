var arr = [1,2,3,4];
var result = 0;
for (var i = 0; i < 4; i++) {
    if (arr[i] % 2 == 0 && arr[i] > 3) {
        result = result + arr[i];
    }
}
console.log(result);