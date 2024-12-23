/**
 * 
 * @param {The word which is given as input and is expected to be generated} originalword 
 * @param {Letters which are guessed  by the user already} guessedletters 
 */

export function getMaskedString(originalword,guessedletters){
    guessedletters=guessedletters.map(letter=>letter.toUpperCase());

    const guessedlettersSet=new Set(guessedletters);
    const result=originalword.toUpperCase().split('').map(char=>{
        if(guessedlettersSet.has(char)){
            return char;
        }else{
            return '_'
        }
    })

    return result;

}