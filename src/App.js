import React, { useEffect, useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("0"); // this.state = {value: 0}
  const [secondValue, setSecondValue] = useState("");
  const [reset, setReset] = useState(true);
  const [symbol, setSymbol] = useState("");

  const symbolChange = (sym) => (
    (e) => {
      e.preventDefault();
      setSymbol(sym);
      setReset(true);
    }
  )
  
  const clear = (e) => {
    e.preventDefault();
    setValue("0");
    setSecondValue("");
    setReset(true);
    setSymbol("");
  }

  const updateValue = (num) => (
    (e) => {
      e.preventDefault(); 
      if (symbol === "") {
        // this.setState({value: })
        if (reset) {
          setValue(num);
          setReset(false);
        } else {
          setValue(value + num);
        }
      } else {
        if (reset) {
          setSecondValue(num);
          setReset(false);
        } else {
          setSecondValue(secondValue + num);
        }
      }
    }
  )
  const result = () => {
    let result;
    switch(symbol) {
      case "+":
        result = parseFloat(value) + parseFloat(secondValue);
        break;
      case "-":
        result = parseFloat(value) - parseFloat(secondValue);
        break;
      case "*":
        result = parseFloat(value) * parseFloat(secondValue);
        break;
      case "/":
        result = parseFloat(value) / parseFloat(secondValue);
        break;
      default: 
        result = parseFloat(value);
    }
    setSymbol("");
    setValue(result.toString());
    setSecondValue("");
    setReset(true);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{ symbol === "" ? value : secondValue}</div>
        <div className="buttons">
          <div className="symbol" onClick={symbolChange("+")}>+</div>
          <div className="symbol" onClick={symbolChange("-")}>-</div>
          <div className="symbol" onClick={symbolChange("*")}>&times;</div>
          <div className="symbol" onClick={symbolChange("/")}>&divide;</div>
          <div onClick={updateValue("7")}>7</div>
          <div onClick={updateValue("8")}>8</div>
          <div onClick={updateValue("9")}>9</div>
          <div onClick={updateValue("4")}>4</div>
          <div onClick={updateValue("5")}>5</div>
          <div onClick={updateValue("6")}>6</div>
          <div onClick={updateValue("1")}>1</div>
          <div onClick={updateValue("2")}>2</div>
          <div onClick={updateValue("3")}>3</div>
          <div onClick={updateValue("0")}>0</div>
          <div onClick={updateValue(".")}>.</div>
          <div id="clear" onClick={clear}>C</div>
          <div className="equal" id="result" onClick={result}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
