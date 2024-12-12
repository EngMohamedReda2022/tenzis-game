import React from "react"
export default function Dice(props) {
 const style={
    backgroundColor:props.isHeld?"#59E391":"white"
 }
    return (
            <button style={style} onClick={props.fun}>{props.value}</button>
    )
}