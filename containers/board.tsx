import {useState} from 'react'
import Square from '../components/square'


function Board(){
    //create a empty array of nine elements and fill each element with null
    const [square, setSquare]=useState(Array(9).fill(null))
    //keep current player in state
    //useState has a default type return of X or O
    //create a random number to represent X or O
    const [currentPlayer, setCurrentPlayer]=useState<'X'|'O'>(
        Math.round(Math.random() *1)===1 ?"X":"O")
    const [winner, setWinner]=useState(null)

    function setSquareValue(index){
        //set value of the element to the player
        const newData= square.map((val, i)=>{
            //if index value is equal
            if(i === index){
                return currentPlayer
            }
            return val
        })
        setSquare(newData)
        //set current player to other player or if its currently X then change to O
        setCurrentPlayer(currentPlayer === "X"?"O":"X")
    }
    return(
        <div>
           <p>hello</p> {currentPlayer}
           {Array(9).fill(null).map((_, i)=>{
            return <Square 
            key={i}
            //create a onclick handler to set the value of the square
            onClick={()=>setSquareValue(i)}
            //if set the index of 0 to X the value of that square will be X
            value={square[i]}
            ></Square>
})
            
           }
        
        </div>
    )
}

export default Board