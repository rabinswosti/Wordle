import './letterBox.styles.css'

const LetterBox = ({letterState, letter, className}) => {
    // console.log("letter is ", letter)
        return <div className = {`${className} ${letterState}`}> 
            {letter} 
        </div>
    }

export default LetterBox;