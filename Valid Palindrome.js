const isPalindrome = function(s) {
    const input = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let left = 0;
    let right = input.length - 1;
    
    while(left < right) {
        if(input[left] != input[right]) {
            return false
        }
        left++;
        right--;
    }
    
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true