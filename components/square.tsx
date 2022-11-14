
type Player = "X"|"O"|null
function Square({value, onClick, winner}:{
    winner:Player
    value:Player
    onClick:()=>void
}){
    if(!value){
        return <button className="square" onClick={onClick} disabled={Boolean(winner)}/>
    }
    return(
        <div>
            <button className={'square square_${value.toLowerCase}'} disabled> {value}</button>
        </div>
    )
}

export default Square