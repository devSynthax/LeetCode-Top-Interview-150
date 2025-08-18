const containsDuplicate = (arr) => {
    if(arr.length == 0 || arr.length < 2) {
        return false
    }

    let hashMap = {}

    for(let i = 0; i < arr.length; i++) {
        if(hashMap[arr[i]]) return true;
        hashMap[arr[i]] = true;
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 3, 1])); // true