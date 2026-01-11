import { createRoot } from 'react-dom/client'
import {useState} from 'react'
import './index.css'



function Counter() {
  /* useState hook to increment and decrement the number */
  const [number, updateNumber] = useState(0);

  const [inputValue, setInputValue] = useState(0);

  const sum = number + parseInt(inputValue);

  return (
    <>
      <button
        type="button"
        /* when + button is clicked, the number is incremented */
        onClick={() => updateNumber(number + 1)}
        >+
      </button>

      {/* Displays the current number */}
      <h1>{number}</h1>

      <button
        type="button"
        /* when - button is clicked, the number is decremented */
        onClick={() => updateNumber(number - 1)}
        >-
      </button>

      <br></br>

      <legend>Write a number here:</legend>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />

      
      <h2>The sum between both numbers is: {sum}</h2>
    </>
  )


}



export default function CounterApp() {
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <Counter/>
    </div>
  );
}