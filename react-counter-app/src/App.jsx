import { createRoot } from 'react-dom/client';
import {useState, useEffect} from 'react';
import './index.css';
import "./App.css";
import Axios from "axios";


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

/* Creating a random number for the data retrieval */
const min = 1;
const max = 100;
const rand = min + Math.random() * (max - min);
let currentQuote = 0 ;


function PhilosophyQuotes() {
  const [quote, setQuote] = useState("");
  const [philospher, setPhilosopher] = useState("");
  const [year, setYear] = useState("");

  const fetchQuote = () => {

    /*fetches quotes from philospher api */
    Axios.get("https://philosophersapi.com/api/quotes").then((res) => {
      console.log(res.data[currentQuote].quote);
      console.log(res.data[currentQuote].philosopher.name);
      console.log(res.data[currentQuote].year);


      setQuote(res.data[currentQuote].quote);
      setPhilosopher(res.data[currentQuote].philospher);
      setYear(res.data[currentQuote].year);

    });

    currentQuote += 1;

  }

  /* using useEffect so the function is not called for every rendering */
  useEffect(() => {  
    fetchQuote();
  }, []);

  return(
    <>
    <button 
      type="button"
      onClick={() => fetchQuote()}
      >Click here if you need wisdom
    </button>
    <p> {quote} </p>
    </>
  )
}



export default function App() {
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <Counter/>
      <PhilosophyQuotes/>
    </div>
  );
}