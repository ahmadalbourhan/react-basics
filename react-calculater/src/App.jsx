import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function handleButtonClick(e, operation) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (!isNaN(inputValue)) {
      setResult((prevResult) => {
        switch (operation) {
          case "add":
            return prevResult + inputValue;
          case "subtract":
            return prevResult - inputValue;
          case "multiply":
            return prevResult * inputValue;
          case "divide":
            if (inputValue !== 0) {
              return prevResult / inputValue;
            } else {
              resultRef.current.textContent = "INFINITY";
              setTimeout(() => {
                resultRef.current.textContent = "";
              }, 3000);
              return 0;
            }
          default:
            return prevResult;
        }
      });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.focus();
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
        <button onClick={(e) => handleButtonClick(e, "add")}>add</button>
        <button onClick={(e) => handleButtonClick(e, "subtract")}>subtract</button>
        <button onClick={(e) => handleButtonClick(e, "multiply")}>multiply</button>
        <button onClick={(e) => handleButtonClick(e, "divide")}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
