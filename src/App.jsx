import "./App.css";

import { useState, useRef } from "react";

const number = Math.trunc(Math.random() * 20) + 1;

function App() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const inputRef = useRef();
  const handleCheck = () => {
    //comprobar si el valor introducido es igual al numero aleatorio
    const inputNumber = Number(inputRef.current.value);
    if (inputNumber === number) {
      //hemos ganado
    } else if (inputNumber > number) {
      //el numero introducido es mayor que el numero aleatorio
      message("📈 Too high!");
    } else {
      //el numero introducido es menor que el numero aleatorio
      message("📉 Too low!");
    }

    setScore(score - 1);
  };

  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>
      Name
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
