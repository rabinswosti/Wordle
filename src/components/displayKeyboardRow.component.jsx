import LetterBox from "./letterBox.component"
import Enter from "./enter.component"
import Delete from "./delete.component"

const DisplayKeyboardRow = ({requiredProps
    : {random_word, rowToDisplay, latestGuess,
    setLatestGuess, wordLength, numberAttempts, letterArray, setLetterArray,
    stateDict, setStateDict, gridBoxStateDict, setGridBoxStateDict, setWin}
    }) => {
    return (
        <div className = "keyboardRows">   
            
                {
                    (rowToDisplay[0] === 'Z') ? 
                        <Enter requiredProps = {{random_word, wordLength, letterArray, latestGuess, setLatestGuess, stateDict, setStateDict,
                                gridBoxStateDict, setGridBoxStateDict, setWin}}
                        />
                    : null
                }
            

            
                {
                    rowToDisplay.map((letter) => 
                        {                       
                            return <button onClick = {
                                () => { if ((latestGuess.length <= wordLength - 1) && (letterArray.length < wordLength * numberAttempts)) {
                                            setLetterArray([...letterArray, letter])
                                            setLatestGuess([...latestGuess, letter])
                                        }
                                    }
                            } >
                                <LetterBox className = 'keyboardClass'
                                key={letter} letter = {letter} letterState = {stateDict[letter] ? stateDict[letter] : 'default'} />
                            </button>
                        }
                    )
                }
            

            
                {
                    (rowToDisplay[0] === 'Z') ? 
                        <Delete requiredProps = {{latestGuess, setLatestGuess, letterArray, 
                            setLetterArray}} />
                    : null
                }
            
            
        </div>
    )
}

export default DisplayKeyboardRow;