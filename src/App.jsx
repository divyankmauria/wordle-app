import { useState } from 'react'
import React from 'react';
import WordleGame from './components/WordleGame';
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col gap-1 bg-black min-h-screen">
        <h1 className="text-center p-3 text-5xl font-bold text-green-500">Wordle</h1> 
        <WordleGame />
      </div>
    </>
  )
}

export default App
