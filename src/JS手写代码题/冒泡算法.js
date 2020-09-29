function bubbleSort(arr) {
    let temp;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let arr = [10, 1, 18, 30, 23, 12, 7, 5, 18, 17];
console.log(bubbleSort(arr)); // [ 1, 5, 7, 10, 12, 17, 18, 18, 23, 30 ]
