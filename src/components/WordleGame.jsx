import { useState, useEffect, useRef } from 'react';
import TileRow from './TileRow';
import Message from './Message';
import { STATES } from '../constants';
import { getWordForTheDay, checkWord, getWordStatus } from '../util/wordUtil';

function WordleGame() {

  const [rows, setRows] = useState([
    { index: 0, word:'', status: [STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK] },
    { index: 1, word:'', status: [STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK] },
    { index: 2, word:'', status: [STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK] },
    { index: 3, word:'', status: [STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK] },
    { index: 4, word:'', status: [STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK] },
    { index: 5, word:'', status: [STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK, STATES.BLANK] }    
  ]);
  const [current, setCurrent] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [guessWord, setGuessWord] = useState(getWordForTheDay());
  const [message, setMessage] = useState('Test Message');  
  const currentRef = useRef(rows[0]);
  const currentIndex = useRef(0);
  useEffect(() => {
    currentRef.current = rows[current];
    currentIndex.current = current;
  }, [current, rows]);

  const handleKeyDown = (e) =>  {

      if(processing || e.ctrlKey || e.metaKey || e.altKey) return;

      // Process Enter Key
      if(e.key==="Enter"){
        if(!checkWord(currentRef.current.word)){
          setMessage('Not a Valid Word');
        }
        else{
          // show animation
          const status= getWordStatus(currentRef.current.word, guessWord);
          setRows( (prevRows) => prevRows.map( (r) => 
            r.index === currentIndex.current ? {...r, 'status': status } : r
          ));
          setCurrent(prev => prev+1);
          setMessage('');
          if(status.every( (s) => s===STATES.CORRECT)){
            setTimeout(() => {
              setMessage('You Won!');
              window.removeEventListener('keydown', handleKeyDown);
            }, 3000);
          }
          else {
            if(currentIndex.current===5){
              setTimeout(() => {
                window.scrollTo(0,0);
                setMessage(`You Lost! The word was ${guessWord.toUpperCase()}`);
                window.removeEventListener('keydown', handleKeyDown);
              }, 3000);
            }
          }
        }
      }

      if(e.key==="Backspace"){
        setRows( (prevRows) => 
          prevRows[currentIndex.current].word.length>0 ? prevRows.map( (r) => 
            r.index === currentIndex.current ? {...r, 'word': r.word.slice(0,r.word.length-1) } : r
          ) : prevRows
        )
        setMessage('');
      }

      if(/[a-zA-Z]/.test(e.key) && e.key.length===1) {
        setRows( (prevRows) => {
          return prevRows[currentIndex.current].word.length<5 ? prevRows.map( (r) => 
            r.index === currentIndex.current ? {...r, 'word': r.word+e.key.toLowerCase() } : r
          ) : prevRows
        })
        setMessage('');
      }

  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return ( 
      <div className="bg-black flex flex-col pe-2">
        <Message text={message}></Message>
        <div className="grid grid-cols-1 grid-rows-6">
          { rows.map( (w, i) => (
              <TileRow key={w.index} word={w.word} status={w.status}></TileRow>
          ))}
        </div>
      </div>
     );
}

export default WordleGame;