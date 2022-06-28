//Wordle is a game where there's a secret word. The player has to identify the word in 6 tries. Everytime they try a word, they get clues on how close the word is to the secret word.
//For example;
//Secret Word; CHALK
//Player Input; BLAST
//Output; RYGRR
//Explanation for output, B, S, T in red color (R), L in yellow color (Y), A in green color (G);

//Red Color means the letter doesn't occur at all
//Yellow color means the letter exist in the secret word but is not at the right position
//Green Color means the letter exists in the secret word and is at the right position.

//Conditions;
//Do not worry about the case where the player is not a dictionary word
//Assume secretWord and guessedWord are the same length
//Words can be of any length

function wordle(secretWord, guessedWord) {
    const secretWordArray = secretWord.split("")
    const guessedWordArray = guessedWord.split("")

    return secretWordArray + guessedWordArray

}

console.log(wordle("Chalk", "Blast"))
