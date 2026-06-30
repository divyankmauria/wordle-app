import { ANSWERS, ALLOWED } from '../data/words.js';

export const getWordForTheDay = function(){
    const today = new Date();
    const start = new Date('01-01-2026');
    const days = Math.floor(((((today-start)/1000)/60)/60)/24);
    return ANSWERS[days];
}

export const checkWord = function(word){
    if(word.length!==5) return false;
    if(!ALLOWED.includes(word)) return false;
    return true;
}

export const getWordStatus = function(word, guessWord){
    let status = Array(5).fill('blank');
    // Check for correct and present positions
    for(let i=0;i<5;i++){
        if(word[i]===guessWord[i]){
            status[i] = 'correct';
        }
        if(!guessWord.includes(word[i])){
            status[i] = 'absent';
        }
    }

    const wordsLeft = guessWord.split('').filter( (char,i) => status[i]!=='correct');
    for(let i=0;i<5;i++){
        if(status[i]==='blank'){
            if(wordsLeft.includes(word[i])){
                status[i] = 'present';
                wordsLeft.splice(wordsLeft.indexOf(word[i]),1);
            }
            else{
                status[i] = 'absent';
            }
        }
    }
    // console.log(status);
    return status;
}