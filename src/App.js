import { useState } from 'react';


function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [msg, setMsg] = useState("");

  
  function isValid(num1,num2){
    if(num1 === "" || num2 === "" ){
      setMsg("Error :  input values cannot be empty");
      return false;
    }
    return true;
  }

  function add() {
    if (isValid(num1, num2)) {
      let solution = +num1 + +num2;
      setResult("Result is = "+ solution);
      setMsg("Success : Your result is shown above!");

    };
  }

  function subtract() {
    if (isValid(num1, num2)) {
      let solution = num1 - num2;
      setResult("Result is = " + solution);
      setMsg("Success : Your result is shown above!");

    };

  }

  function multiply() {
    if (isValid(num1, num2)) {
      let solution = +num1 * +num2;
      setResult("Result is = " + solution);
      setMsg("Success : Your result is shown above!");

    };


  }

  function divide() {
    if (isValid(num1, num2)) {
      let solution = num1 / num2;
      setResult("Result is = " + solution);
      setMsg("Success : Your result is shown above!");

    };
  }


  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input onChange={(e) => setNum1(e.target.value)} type='text' placeholder='Num 1' /><br/>
      <input onChange={(e) => setNum2(e.target.value)} type='text' placeholder='Num 2' /><br/>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <p>{result}</p>
      <p className={msg[0] === 'S' ? "green" : "red"}>{msg}</p>
    </div>
  );
}

export default App;
