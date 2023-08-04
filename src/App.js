import React from "react";
import "./style.css";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [strToDisplay, setstrToDisplay] = useState("");
  const [lastOperator, setLastoperator] = useState("");
  const operators = ["+", "-", "*", "/", "%"];

  const handleOnClick = (val) => {
    if (operators.incldes(val) && !strToDisplay.lenght) {
      return;
    }

    if (operators.includes(val)) {
      setLastoperator(val);
      const lastChar = strToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        setstrToDisplay(strToDisplay.slice(0, -1));
      }
    }

    if (val === "AC") {
      setstrToDisplay("");
    }
    if (val == "C") {
      setstrToDisplay(strToDisplay.slice(0, -1));
    }

    if (operators.includes(val)) {
      setLastoperator(val);
      const lastChar = strToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        setstrToDisplay(strToDisplay.slice(0, -1) + val);
      }
    }

    if (val === "=") {
      setstrToDisplay(eval(strToDisplay).tostring());
    }

    if (val === ".") {
      if (!strToDisplay.lenght) {
        return;
      }
    }
  };

  const buttons = [
    { cls: "btn btn-ac", label: "AC" },
    { cls: "btn btn-c", label: "AC" },
    { cls: "btn btn-per", label: "%" },
    { cls: "btn btn-divide", label: "/" },
    { cls: "btn btn-7", label: "7" },
    { cls: "btn btn-8", label: "8" },
    { cls: "btn btn-9", label: "9" },
    { cls: "btn btn-x", label: "*" },
    { cls: "btn btn-4", label: "4" },
    { cls: "btn btn-5", label: "5" },
    { cls: "btn btn-6", label: "6" },
    { cls: "btn btn-minus", label: "-" },
    { cls: "btn btn-1", label: "1" },
    { cls: "btn btn-2", label: "2" },
    { cls: "btn btn-3", label: "3" },
    { cls: "btn btn-plus", label: "+" },
    { cls: "btn btn-0", label: "0" },
    { cls: "btn btn-dot", label: "." },
    { cls: "btn btn-equals", label: "=" },
  ];
  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">0.00</div>
        {buttons.map((item, index) => {
          return (
            <Button
              key={index}
              cls={item.cls}
              label={item.label}
              handler={handleOnClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
