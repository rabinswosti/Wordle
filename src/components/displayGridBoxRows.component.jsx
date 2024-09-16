import LetterBox from "./letterBox.component"

const DisplayGridBoxRows = ({requiredProps: {emptyRow, halfFilled, letterArray, wordLength, numberAttempts,
    gridBoxStateDict }}) => {
        const filledRowsNumber = Math.floor(letterArray.length/wordLength)
        const arraySize = halfFilled 
                        ? 1 
                        : (
                            emptyRow ? 
                            (
                                (numberAttempts - filledRowsNumber - 1 > 0) 
                                ? (numberAttempts - filledRowsNumber - 1) 
                                : 0 
                            )
                            : filledRowsNumber
                        )
    return (                 
        Array(arraySize).fill('').map((_,index) => { 

            const rowArray = halfFilled ? (
                                letterArray.slice(filledRowsNumber*wordLength, (filledRowsNumber+1)*wordLength)
                                .concat(Array(wordLength - (letterArray.length % wordLength)).fill(''))           
                            )
                            : (
                                emptyRow ? Array(wordLength).fill('')
                                : letterArray.slice(index*wordLength, (index+1)*wordLength) 
                            )
            const offsetIndex = halfFilled 
                                ? filledRowsNumber
                                : 0
            return <div className = "displayRows" > {
                rowArray
                .map((letter, innerIndex) => {
                return (
                    <LetterBox className = 'displayBoxClass' letter = {letter}
                    letterState =   { letter === '' ? 'default' 
                                        : (
                                            gridBoxStateDict[offsetIndex + index + 1]
                                            ? gridBoxStateDict[offsetIndex + index + 1][innerIndex][letter] 
                                            : 'default'
                                          )
                                    } 
                    />)
                }
                )
            }
            </div>
        }) 
    )       
}

export default DisplayGridBoxRows;