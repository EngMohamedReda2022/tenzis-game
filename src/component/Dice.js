import React from "react"
export default function Dice(props) {
    console.log(props.value)
    return (
        <div className="dice">
            {props.value}
        </div>
    )
}