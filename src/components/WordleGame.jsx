import { useState, useEffect } from 'react';
import TileRow from './TileRow';
import { getWordForTheDay } from '../util/wordUtil';

function WordleGame() {
  // const [count, setCount] = useState(0)
  // const [tiles, setTiles] = useState([1,2,3,4,5]);
  const [rows, setRows] = useState([
    { index: 0, word:'', status: 'inactive'},
    { index: 1, word:'', status: 'inactive'},
    { index: 2, word:'', status: 'inactive'},
    { index: 3, word:'', status: 'inactive'},
    { index: 4, word:'', status: 'inactive'},
    { index: 5, word:'', status: 'inactive'}    
  ]);
  const [current, setCurrent] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [guessWord, setGuessWord] = useState('cloud');
  
  const currRow = rows[current];
  console.log(getWordForTheDay())

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(processing || e.ctrlKey || e.metaKey || e.altKey) return;
      console.log(e);

      // Process Enter Key
      if(e.key==="Enter"){
        if(currRow.word.length==5){
          // update rows
        }
        else{
          // show animation
        }
      }

      if(e.key==="Backspace"){
        setRows( (prevRows) => 
          prevRows[current].word.length>0 ? prevRows.map( (r) => 
            r.index === current ? {...r, 'word': r.word.slice(0,r.word.length-1) } : r
          ) : prevRows
        )
      }

      if(/[a-zA-Z]/.test(e.key) && e.key.length===1) {
        console.log(e.key)
        setRows( (prevRows) => 
          prevRows[current].word.length<5 ? prevRows.map( (r) => 
            r.index === current ? {...r, 'word': r.word+e.key.toLowerCase() } : r
          ) : prevRows
        )
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return ( 
      <div className="wordle-game">
        <div className="board">
          { rows.map( (w, i) => (
              <TileRow key={w.index} word={w.word}></TileRow>
          ))}
        </div>
      </div>
     );
}

export default WordleGame;