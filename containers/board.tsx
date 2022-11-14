import {useState} from 'react'
import { resourceLimits } from 'worker_threads'
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
    
    function reset(){
        setSquare(Array(9).fill(null))
        setWinner(null)     
        setCurrentPlayer(Math.round(Math.random() *1)===1 ?"X":"O")

    }
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
           <div className='grid'>
           {Array(9).fill(null).map((_, i)=>{
            return <Square 
            winner={winner}
            key={i}
            //create a onclick handler to set the value of the square
            onClick={()=>setSquareValue(i)}
            //if set the index of 0 to X the value of that square will be X
            value={square[i]}
            ></Square>
})
            
           }
           </div>
           <button className='reset' onClick={reset}>RESET</button>
        
        </div>
    )
}

export default Board