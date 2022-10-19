import words from "./words.js";

function getPositionInAlphabet(word){
    //This is something you have not seen before. Don't worry.
    return word.charCodeAt(0) - "a".charCodeAt(0);
}

function createIndexForDictionary(d){
    let index = [0];
    let position = 0;
    for( let i = 1; i <= 26; i++){
        while ( position < d.length && getPositionInAlphabet(d[position]) < i )
            position++;
        index[i] = position;
    }
    return index;
}

function indexSearch(needle, haystack, index){
    let startingPoint = index[getPositionInAlphabet(needle)];
    let endingPoint = index[(getPositionInAlphabet(needle) + 1)];
    
       for (let i = startingPoint; i < endingPoint; i++) {
        if (needle == haystack[i]) {
            return true;
        } else {
            
        }
    }
    return false;
}

let index = createIndexForDictionary(words);

export default function(word){
    return indexSearch(word, words, index);
}