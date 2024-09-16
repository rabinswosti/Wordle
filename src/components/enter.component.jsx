import LetterBox from "./letterBox.component"

const Enter = ({requiredProps : {random_word, wordLength, letterArray, latestGuess, setLatestGuess, stateDict, setStateDict,
    gridBoxStateDict, setGridBoxStateDict, setWin}}) => {
    
    return ( 
    <div className = 'keyboardRows' >
      <button onClick = {() => {
        if (latestGuess.length === wordLength) {
          var latestGuessStateDict = []
          var updatedStateDict = {}
          latestGuess
          .map((letter, index) => {
          
            if (random_word[index] === letter) {
               latestGuessStateDict = [...latestGuessStateDict, {[letter]: 'correct'}]
               updatedStateDict = {...updatedStateDict, [letter]: 'correct'}
              
            } 
            
            else if (random_word.includes(letter)) 
            {
              latestGuessStateDict = [...latestGuessStateDict, {[letter]: 'present'}]
              if (stateDict[letter] != 'correct') {
                  updatedStateDict = {...updatedStateDict, [letter]: 'present'}
              }
          
            }
            else
            {
              latestGuessStateDict = [...latestGuessStateDict, {[letter]: 'absent'}]
              updatedStateDict = {...updatedStateDict, [letter]: 'absent'}
              
            }
          })
          setGridBoxStateDict({...gridBoxStateDict, [letterArray.length/wordLength]: latestGuessStateDict})
          setStateDict({...stateDict, ...updatedStateDict})
          if (latestGuess.join('') == random_word) {
            setWin(1)
          }
          setLatestGuess([])
          return null
        }
        
        }} >
        <LetterBox className = 'keyboardClass default'
          key='ENTER' letter = 'ENTER' />
      </button>
    </div>
    )
}

export default Enter;