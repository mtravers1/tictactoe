
type Player = "X"|"O"|null
function Square({value, onClick, winner}:{
    winner:Player
    value:Player
    onClick:()=>void
}){
    if(!value){
        return <button onClick={onClick} disabled={Boolean(winner)}/>
    }
    return(
        <div>
            <button>{value}</button>
        </div>
    )
}

export default Square