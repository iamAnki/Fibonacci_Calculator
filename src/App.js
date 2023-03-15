import "./styles.css";
//import "./fib.js";
import React from "react";

export default function App() {
  let [fun, setfun] = React.useState();
  let [result, setresult] = React.useState();
  const Calculator = (x) => {
    //iterative method
    // let a = 0;
    // let b = 1;
    // let res = 0;
    // for (let i = 2; i <= x; i++) {
    //   let temp = a + b;
    //   a = b;
    //   b = temp;
    //   res = temp;
    // }
    // return setresult(res);
    //};
    //recursive method
    if (x <= 1) return x;
    else return Calculator(x - 1) + Calculator(x - 2);
  };
  const Cal = () => {
    let fib = Calculator(fun);
    setresult(fib);
  };
  //console.log(result)
  return (
    <div className="App">
      <h1>Fibonacci Calculator</h1>
      <h1>Enter value</h1>
      <input
        type="number"
        placeholder="Enter n to calculate"
        onChange={(e) => setfun(e.target.value)}
      />
      <p>
        Answer :
        <strong>
          <span id="answer"></span>
        </strong>
      </p>
      <button
        onClick={() => {
          Cal();
        }}
      >
        Calculate
      </button>
      {/* float result = Float.parseFloat(result); */}
      <h5>{result}</h5>
    </div>
  );
}
