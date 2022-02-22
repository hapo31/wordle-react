import React, { useRef, useState } from "react";
import "./App.css";

import Words from "./components/Words";

function App() {
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      {answers.map((answer, index) => (
        <Words key={`${answer}-${index}`} answer={answer} question="thorn" />
      ))}
      <input
        maxLength={5}
        ref={ref}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (ref.current) {
            ref.current.value = "";
          }
          setInput("");
          setAnswers([...answers, input]);
        }}
      >
        ENTER
      </button>
    </div>
  );
}

export default App;
