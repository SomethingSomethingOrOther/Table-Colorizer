import './App.css';
import {useState} from "react"

function App() {
  const [inputValue,setInputValue] =useState("")
  const [bool,setBool]=useState(false)

   const handleChange=()=>{
    const input=Number(inputValue) 
    if (input >= 1 && input <= 9){
        setBool(true)
    }else{
      alert("Enter a number between 1-9")
    }
   }


   const handleReset=()=>{
    setInputValue("")
    setBool(false)
   }

  return (
    <div className="App">
      <h1>Table Colorizer</h1>
      <div>
        <label>
          Write a number (1-9):
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        </label>

      </div>

     <div> 
      <button onClick={handleChange}>Color me</button>
      <button onClick={handleReset}>Reset me</button>
      </div>
        <div className="container">
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 1 ?  "orange":""):""}}>1</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 2 ? "orange":""):""}}>2</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 3 ? "orange":""):""}}>3</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 4 ? "orange":""):""}}>4</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 5 ? "orange":""):""}}>5</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 6 ? "orange":""):""}}>6</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 7 ? "orange":""):""}}>7</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 8 ? "orange":""):""}}>8</div>
          <div className="numbers" style={{backgroundColor: bool ? (Number(inputValue) === 9 ? "orange":""):""}}>9</div>
        </div>
    </div>
  );
}

export default App;
