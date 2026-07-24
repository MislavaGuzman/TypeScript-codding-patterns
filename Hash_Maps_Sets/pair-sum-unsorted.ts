function pairSumUnsorted(nums: number[], target: number): number[] {
    const hashmap = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        const x = nums[i];
        const complement = target - x;
        if (hashmap.has(complement)) {
            return [hashmap.get(complement)!, i];
        }
        hashmap.set(x, i);
        
    }
    return [];
}


console.log(pairSumUnsorted([1, 3, 5, 8], 11));
//Hash_Maps_Sets\pair-sum-unsorted.ts