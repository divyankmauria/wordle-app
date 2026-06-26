import { ANSWERS, ALLOWED } from '../data/words.js';

export const getWordForTheDay = function(){
    const today = new Date();
    const start = new Date('01-01-2026');
    const days = Math.floor(((((today-start)/1000)/60)/60)/24);
    return ANSWERS[days];
}