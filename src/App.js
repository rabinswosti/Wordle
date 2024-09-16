import GridBoxes from './components/gridBoxes.component';
import './App.css';
import { useState } from 'react';
import { Fragment } from 'react';
import GameOver from './components/gameOver.component';
import DisplayKeyboardRow from './components/displayKeyboardRow.component';

const firstRowAlphabet = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'P']
const secondRowAlphabet = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const thirdRowAlphabet = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
const numberAttempts = 6
const wordLength = 5
const random_word = 'BEAST'

function App() {
  const [letterArray, setLetterArray] = useState([])
  const [stateDict, setStateDict] = useState({})
  const [gridBoxStateDict, setGridBoxStateDict] = useState({})
  const [latestGuess, setLatestGuess] = useState([])
  const [win, setWin] = useState(0)

  return ( <Fragment>
              {
                (letterArray.length >= (wordLength * numberAttempts)) && latestGuess.length == 0 && 
                  win == 0 
                ? <GameOver textToDisplay = {`You lost! The word is ${random_word}`} 
                    setterFunctions = {{ setLetterArray, setStateDict,
                      setGridBoxStateDict, setLatestGuess, setWin }} />
                : (win == 1)
                ?  <GameOver textToDisplay = {`Congratulations!`} 
                setterFunctions = {{ setLetterArray, setStateDict,
                  setGridBoxStateDict, setLatestGuess, setWin }} />
                : <center>
                    <h2>You have {numberAttempts} attempts to guess the word</h2>
                  </center>
              }

              <GridBoxes requiredProps = {{numberAttempts, wordLength, 
                  letterArray, gridBoxStateDict}}/>

              <div className = "keyBoardLayout">
                {
                  [firstRowAlphabet, secondRowAlphabet, thirdRowAlphabet]
                  .map((rowToDisplay)=> 
                    <DisplayKeyboardRow requiredProps = {{random_word, rowToDisplay, latestGuess,
                      setLatestGuess, wordLength, numberAttempts, letterArray, setLetterArray,
                      stateDict, setStateDict, gridBoxStateDict, setGridBoxStateDict, setWin}} />
                    )
                }
              </div> 
          </Fragment>
        )
}

export default App;
