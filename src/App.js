import React from 'react';
import './App.css';
import Dice from "./component/Dice"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
function App() {
// identify state for all Dice
const [allDice,setAllDice]=React.useState(()=>generateAllDice())
const gameWon=allDice.every(index=>index.isHeld==true)
&&
allDice.every(index=>index.value==allDice[0].value)
//function generat all dice
function generateAllDice() {
  // const arr=[]
  // for (let i=0;i<10;i++) {
  //   arr.push(
  //     {
  //       isHeld:false,
  //       id:i,
  //       value:Math.ceil(Math.random() * 6)
  //     }
  //   )
  // }
  // return arr;
  return new Array(10).fill(0).map((index)=>{
    return{ 
      id:nanoid(),
      isHeld:false,
      value:Math.ceil(Math.random() * 6)
    }
  })
}
//check if all elements is helded
function handleIsHeld(id) {
  const newArr=allDice.map((index)=>{
    if(index.id===id) {
      return {
        id:index.id,
        value:index.value,
        isHeld:!index.isHeld
      }
    }else {
      return index;
    }
  })
  setAllDice(newArr)
}
//handle when I make rolling
function handelRoll() {
    const newArr=allDice.map((index)=>{
      if (index.isHeld) {
        return index
      } else {
        return {
          id:index.id,
          isHeld:false,
          value:Math.ceil(Math.random() * 6)
        }
      }
    })
    setAllDice(newArr)
    if(gameWon) {
      setAllDice(generateAllDice())
    }
}
//create all dice component
const allElements=allDice.map((index)=>{
  return <Dice
    id={index.id}
    isHeld={index.isHeld}
    value={index.value}
    fun={()=>handleIsHeld(index.id)}
  />
})
const text=gameWon?"New Game":"Roll"
  return (
    <main>
      {gameWon&&<Confetti/>}
      <div className='white-board'>
          <div className='dice-container'>
              {allElements}
          </div>
          <button className='roll' onClick={handelRoll}>{text}</button>
      </div>
    </main>
  )
}

export default App;
