import React from 'react';
import './App.css';
import Dice from "./component/Dice"

function App() {
  console.log(<Dice/>)
const [allDice,setAllDice]=React.useState([0,1,2,3,4,5,6,7,8,9,10])
const allElements=allDice.map((index)=>{
  return <Dice/>
})
  return (
    <main>
      <div className='white-board'>
      {allElements}
      </div>
    </main>
  )
}

export default App;
