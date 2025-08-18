const twoSum = (arr, target) => {
    const hashMap = {};
    
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let remaing = target - current;

       if(remaing in hashMap) {
        return [hashMap[remaing], i]
       }

       hashMap[current] = i
    }
};
