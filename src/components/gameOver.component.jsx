import './gameOver.styles.css'
const GameOver = ({textToDisplay, setterFunctions}) => {
    const   { 
                setLetterArray,
                setStateDict,
                setGridBoxStateDict, 
                setLatestGuess, 
                setWin 
            }   = setterFunctions

    return <div className = 'gameOverClass' >
            <div> 
                <h2>{textToDisplay}</h2> 
            </div>

            <div>
                <button onClick  ={() => {
                    setLetterArray([])
                    setStateDict({})
                    setGridBoxStateDict({})
                    setLatestGuess([])
                    setWin(0)
                }} > 
                    <h3>Reset</h3>
                </button>
            </div>
            
        </div>
}

export default GameOver;