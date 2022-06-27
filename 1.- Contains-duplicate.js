//Given an integer array, return true if any value appears at least twice in the array, and return false if every element is distinct.

const array = [1, 2, 3]

const duplicate = (array) => {
    //create a hash map
    nums = {};

    //loop over array, if num is not in the hash map, add it, if it already exists return false
    for (let num of array) {
        if (!(num in nums)){
            nums[num] = 0;
        }

        nums[num] += 1;

        if (nums[num] > 1) return true

    }

    return false
}

console.log(duplicate(array))
