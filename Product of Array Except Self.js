function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    // Left pass: compute prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    // Right pass: compute suffix products and multiply
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;
}
