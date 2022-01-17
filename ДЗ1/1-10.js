var arr = [6,5,4,3,2,1];
var sort = false;   
var bufer;
while (!sort) {
    sort = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            sort = false; 
            bufer = arr[i]; 
            arr[i] = arr[i+1]; 
            arr[i+1] = bufer;
        }
    }
}
for (var i = 0; i < arr.length; i++) {
    console.log (arr[i]);
}