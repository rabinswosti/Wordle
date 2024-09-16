import LetterBox from "./letterBox.component"
import './gridBoxes.styles.css' 
import { Fragment } from "react"
import DisplayGridBoxRows from "./displayGridBoxRows.component"

const GridBoxes = ({requiredProps: {numberAttempts, wordLength, letterArray, gridBoxStateDict}}) => {
    return (
        <div className = "displayContainer" >
            <DisplayGridBoxRows requiredProps = {{emptyRow: false, halfFilled: false, letterArray, wordLength, numberAttempts,
                gridBoxStateDict }} />
            {
                (numberAttempts - Math.floor(letterArray.length/wordLength)) > 0
                ? 
                    Array(2).fill('').map((_,index) => <DisplayGridBoxRows requiredProps = {{emptyRow: true, halfFilled: !index, letterArray, wordLength, numberAttempts,
                        gridBoxStateDict }} />
                    )
                : null
            } 
        </div>
    )
}
export default GridBoxes;