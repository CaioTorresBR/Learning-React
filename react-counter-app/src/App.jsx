import { createRoot } from 'react-dom/client';
import {useState, useEffect} from 'react';
import './index.css';
import "./App.css";
import Axios from "axios";

let currentQuote = 0 ;
const quote_style = {
  color: "yellow"
}

function Counter() {
  /* useState hook to increment and decrement the number */
  const [number, updateNumber] = useState(0);

  const [inputValue, setInputValue] = useState(0);

  /* Adds number selected with the buttons and number input */
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
  );
}

/* Function that fetches quotes from philosophers API and displays it after pressing a button*/
function PhilosophyQuotes() {
  const [quote, setQuote] = useState("");
  const [year, setYear] = useState("");

  /*fetches quotes from philospher api */
  const fetchQuote = () => {
    Axios.get("https://philosophersapi.com/api/quotes").then((res) => {
      console.log(res.data[currentQuote].quote);
      console.log(res.data[currentQuote].year);

      setQuote(res.data[currentQuote].quote);
      setYear(res.data[currentQuote].year);
    });

    currentQuote += 1;
  }

  return(
    <>
    <button 
      type="button"
      onClick={() => fetchQuote()}
      >Click here if you need wisdom
    </button>
     {/*Will display the quote and the year*/}
    <p style={quote_style}> {quote} </p>
    <p style={quote_style}> {year} </p>
    </>

  )
}


/*Function that fetches data obtained by api created with express js */
function PoutineEquation() {
  
  const [poutine, setPoutine] = useState({});

  const fetchPoutine = () => {
    Axios.get("http://localhost:3000/poutine").then((res) => {
      console.log(res.data);

      // creates poutine object
      setPoutine({
        potatoes : res.data.potatoes,
        gravy: res.data.gravy,
        happiness: res.data.happiness
      })
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => fetchPoutine()}
        >Click here for Poutine Math
      </button>
      <p>{poutine.potatoes} + {poutine.gravy} = {poutine.happiness}</p>
    </>
  )
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <Counter/>
      <PhilosophyQuotes/>
      <PoutineEquation/>
    </div>
  );
}