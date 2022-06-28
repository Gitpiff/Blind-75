//Given a string s, determine if it is a palindrome -if the string reads the same as when it's reversed- , considering only alphanumeric characters and ignoring cases.

//solution 1, Iterative
const palindrome = (s) => {
    //alphanumeric values
    let alphanumeric = /^[0-9a-zA-Z]/;
    //if string does not contain alphanumeric values, return false
    if (!s.match(alphanumeric)) return false;
    //create a new string
    let newString = [];

    //iterate from last to first, adding the value of i to the new string
    for (let i = s.length - 1; i >= 0; i --) {
        newString.push(s[i]);
    }

    return s === newString.join("");
}


//solution 2 -Only works on single word strings-
// const palindrome = (s) => {
//     //create two pointers, one for the first element, one for the last element
//     let leftIndex = 0;
//     let rightIndex = s.length -1;

//     //loop while
//     while (leftIndex < rightIndex) {
//         //compare if both values are the same, if not return false
//         if (s[leftIndex] !== s[rightIndex]) return false;

//         //move the index pointers after each iteration
//         leftIndex ++;
//         rightIndex --;
//     }

//     return true;
// }


console.log(palindrome("A man, a plan, a canal: Panama"))
