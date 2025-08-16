const reverse = (arr, start, end) => {
    let i = start;
    let j = end;

    while(i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
    }
    return arr;
}

const rotate = (arr, target) => {
    let len = arr.length;
    target = len % target;
    
    // Step 1: Reverse entire array
    reverse(arr, 0, len - 1);

    // Step 2: Reverse first k elements
    reverse(arr, 0, target - 1);

    // Step 3: Reverse remaining n - k elements
    reverse(arr, target, len - 1);
}

