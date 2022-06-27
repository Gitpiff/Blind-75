//Given two strings "s" and "t", return true if "t" is an anagram of "s", and false otherwise
//Anagrams are strings -words- that contain the same characters in any order.

const anagram = (s, t) => {
    //if the strings do not have the same length, return false
    if (s.length !== t.length) return false;

    //count how many times each character repeats in each string
    //declare a hash map
    count = {};

    //loop, if the char is not present, then add it to count, if present add 1 per time the char repeats
    for (let char of s) {
        if(!(char in count)) {
            count[char] = 0;
        }

        count[char] += 1;
    }

    //loop the second string, this time check if the char is present, instead of adding 1, subtract one
    for (let char of t) {
        if(!(char in count)) {
            count[char] = 0;
        }

        count[char] -= 1;
    }

    //for the result, iterate through the hash map, if all of the char values are 0, return true
    for (let char in count) {
        if (count[char] !== 0) {
            return false
        }
    }

    return true

}


console.log(anagram("keep", "peek"))
