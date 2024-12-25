import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  // const [buttonClicked, setButtonClicked] = useState(false);


  
  useEffect(() => {
    if (result) {
      inputRef.current.value = "";
      inputRef.current.focus();
      setButtonClicked(false); // Reset the button click state
    }
  }, [result]);
  

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    setButtonClicked(true); // Trigger the button click effect
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    setButtonClicked(true); // Trigger the button click effect
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    setButtonClicked(true); // Trigger the button click effect
  }

  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => {
      if (inputValue !== 0) {
        return result / inputValue;
      } else {
        // Handle division by zero or other cases where the result is 0
        resultRef.current.textContent = "INFINITY";
        setTimeout(() => {
          resultRef.current.textContent = "";
        }, 3000);
        return 0;
      }
    });
    setButtonClicked(true); // Trigger the button click effect
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    setButtonClicked(true); // Trigger the button click effect
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    setButtonClicked(true); // Trigger the button click effect
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p>{result}</p>
        <p ref={resultRef}></p>
        <input
          pattern="[0-9]*"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
