import React, { useEffect, useState } from "react";
import "./index.css";
const App = () => {
  const [entry, setEntry] = useState("");
  const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = ["*", "+", "-", "/"];
  const [history, setHistory] = useState([]);
  console.log(history);
  return (
    <>
    <section
      style={{
        width: (7 / 12) * 100 + "%",
        margin: "0 auto",
      }}
    >
      <input value={entry} disabled />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <button onClick={() => setEntry("")}>C</button>
        <button
          onClick={() => setEntry((prev) => prev.substring(0, prev.length - 1))}
        >
          Del
        </button>
        {value.map((value, i) => (
          <button onClick={() => setEntry((prev) => prev + value)} key={i}>
            {value}
          </button>
        ))}
        {symbols.map((value, i) => (
          <button
            onClick={() =>
              setEntry((prev) => 
                
                 prev.length > 0
                  ? prev
                    .substring(prev.length - 1, prev.length)
                    .includes("*") ||
                    prev
                      .substring(prev.length - 1, prev.length)
                      .includes("/") ||
                    prev
                      .substring(prev.length - 1, prev.length)
                      .includes("-") ||
                    prev.substring(prev.length - 1, prev.length).includes("+")
                    ? prev
                    : prev + value
                  : prev
              
              )
            }
            key={value + i}
          >
            {value}
          </button>
        ))}
      </section>
      <button
        onClick={() =>
          setEntry((prev) => {

            if (prev.length > 0 && !symbols.includes(prev[prev.length - 1])) {
              console.log("ran");
              setHistory((history) => [...new Set([...history, prev])]);
            }
            return prev.length > 0
              ? prev.substring(prev.length - 1, prev.length).includes("*") ||
                prev.substring(prev.length - 1, prev.length).includes("/") ||
                prev.substring(prev.length - 1, prev.length).includes("-") ||
                prev.substring(prev.length - 1, prev.length).includes("+")
                ? prev
                : eval(prev).toString()
              : prev;
          })
        }
      >
        =
      </button>
      </section>
      <section>
        {history.map((value, i) => (<p>{value} = {eval(value)}</p>))}
        
      </section>
    </>
  );
};

export default App;
