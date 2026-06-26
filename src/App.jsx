import { useState } from 'react'
import React from 'react';
import WordleGame from './components/WordleGame';
import './App.css'

function App() {

  return (
    <>
      <div className="wordle-app">
        My Wordle App
        <h1>Wordle</h1> 
        <WordleGame />
      </div>
    </>
  )
}

export default App
