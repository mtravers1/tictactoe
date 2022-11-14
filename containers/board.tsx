import {useState} from 'react'

function Board(){
    //create a empty array of nine elements and fill each element with null
    const [square, setSquare]=useState(Array(9).fill(null))
    //keep current player in state
    //useState has a default type return of X or O
    //create a random number to represent X or O
    const [currentPlayer, setCurrentPlayer]=useState<'X'|'O'>(
        Math.round(Math.random() *1)===1 ?"X":"O")
    
    return(
        <div>
           <p>hello</p> {currentPlayer}
            This is a board
        </div>
    )
}

export default Board