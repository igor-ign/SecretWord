import { words } from './constants/index';

import { useState } from 'react';

import './App.css';
import { Home } from './ui/screens/index';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [wordHint, setWordHint] = useState()
  const [letters, setLetters] = useState()
  
  const handleStartGame = () => {
    const randomNumber = Math.floor(Math.random() * words.length)
    const randomWord = words[randomNumber]
    const wordLetters = randomWord.split('')

    setIsGameStarted(true)

    setWordHint(randomWord.hint)
    setLetters(wordLetters)

  }

  return (
    <div className="App">
      {
        isGameStarted? undefined : <Home handleStartGame={handleStartGame}/>

      }

    </div>
  );
}

export default App;
