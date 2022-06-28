//Given a string s, determine if it is a palindrome -if the string reads the same as when it's reversed- , considering only alphanumeric characters and ignoring cases.

//solution 1, Iterative
// const palindrome = (s) => {
//     //create a new string
//     let newString = [];

//     //iterate from last to first, adding the value of i to the new string
//     for (let i = s.length - 1; i >= 0; i --) {
//         newString.push(s[i]);
//     }

//     return s === newString.join("");
// }


//solution 2
const palindrome = (s) => {
    //create two pointers, one for the first element, one for the last element
    let leftIndex = 0;
    let rightIndex = s.length -1;

    //loop while
    while (leftIndex < rightIndex) {
        //compare if both values are the same, if not return false
        if (s[leftIndex] !== s[rightIndex]) return false;

        //move the index pointers after each iteration
        leftIndex ++;
        rightIndex --;
    }

    return true;
}


console.log(palindrome("aba"))
