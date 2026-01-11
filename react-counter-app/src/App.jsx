import { createRoot } from 'react-dom/client'
import {useState} from 'react'
import './index.css'



function Counter() {
  /* useState hook to increment and decrement the number */
  const [number, updateNumber] = useState(0);

  return (
    <>
      <button
        type="button"
        /* when + button is clicked, the number is incremented */
        onClick={() => updateNumber(number + 1)}
        >+
      </button>

      <h1>{number}</h1>

      <button
        type="button"
        /* when - button is clicked, the number is decremented */
        onClick={() => updateNumber(number - 1)}
        >-
      </button>
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