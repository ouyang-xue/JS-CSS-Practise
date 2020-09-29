function SelectionSort(arr) {
    if (!arr) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {
                index = j;
            }
        }
        if (index === i) {
            continue;
        } else {
            let temp;
            temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
let arr = [10, 1, 18, 30, 23, 12, 7, 5, 18, 17];
console.log(SelectionSort(arr));
