import React from "react";
import {useState} from "react";
import "./App.css";

export default function App() {

  // Question 1
  const[todo,setTodo]=useState("");
  const[arr,setArr]=useState(["Do Some Work Now!!"])

  function handleChange(e){
    setTodo(e.target.value)
  }

  function handleText(){
    setArr([...arr,todo]);
  }

  // Question 2
  
  const [count,setCount]=useState(0);
  function handleIncrease(){
    setCount(count+1);
  }
    function handleDecrease(){
    setCount(count-1 );
  }

  // Question 3
  const[target,setTarget]=useState(true)

  function handleName(){
    setTarget(!target);
  }

  
  return (
    <div id="Content">
      {/* Question 1 */}
      <h4>On clicking Add button will show in below task list</h4>
      <input value={todo} type="text" onChange={handleChange}/>
      <button onClick={handleText}>Add</button>
      <ul>
        {
          arr.map((x)=>{
            return <li>{x}</li>
          })
        }
      </ul>

      <br/><br/><br/><br/><br/><br/>

      {/* Question 2 */}
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>



      <br/><br/><br/><br/><br/><br/>

      {/* Question 3 */}
      {target? <p>My Name is Amit</p> : <p>My Name is Raghav</p>}
      <button onClick={handleName}>Change Name</button>
    </div>
  );
}
