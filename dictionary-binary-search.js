import words from "./words.js";

function binarySearch(needle, haystack){
    let start = 0;
    let end = haystack.length;
    while ( start < end ){
        let pivot = Math.floor((start + end) / 2);
        let wordAtPivot = haystack[pivot];
        //console.log(start, end, pivot, wordAtPivot);

        if ( wordAtPivot < needle ){
            start = pivot+1;
        } else if ( wordAtPivot > needle ){
            end = pivot;
        } else {
            return true;
        }
    }
    return false;
}

export default function(word){
    return binarySearch(word, words);
}