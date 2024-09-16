import LetterBox from "./letterBox.component"

const Delete = ({requiredProps: {latestGuess, setLatestGuess, letterArray, 
            setLetterArray}}) => {
    return ( 
    <div className = 'keyboardRows' >
        <button onClick = {() => {
            if (latestGuess.length > 0) {
              setLetterArray(letterArray.slice(0, letterArray.length - 1))
              setLatestGuess(latestGuess.slice(0, latestGuess.length - 1))
            }
            }} >
            <LetterBox className = 'keyboardClass default'
              key='DELETE' letter = 'DELETE' />
        </button>
    </div>
    )
}

export default Delete;