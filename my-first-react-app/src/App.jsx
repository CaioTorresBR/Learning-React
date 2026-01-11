import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

{/*Here I'm understanding how a React component is created and behaves with JSX*/}
function Car() {
  
  const brand = "Ford";
  const model = "Mustang"
  
  const myObj = {
    name: "Fiat",
    model: "500",
    color: "white"
  }

  const x = "myclass";

  const mystyles = {
  color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  }

  return (
    <>
      <h2>My car is a:</h2>
      {/* Accessing variables */}
      <p> {brand} {model}</p>

      {/* Dealing with Expressions */}
      <p> It has {200 * 30} horsepower</p>

      {/* Object properties */}
      <h2> My friend has a:</h2>
      <p>  {myObj.name} {myObj.model}</p>
      <p> It's color is {myObj.color}</p>

      {/* Attributes and expressions as attributes */}
      <h1 className='myclass'>Hello World</h1>

      <h1 style={mystyles}>My car</h1>
    </>
  );
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  )
}

/*Hooks*/
function FavoriteColor() {
  {/*
    color -> current state
    setColor -> function that is used to updaye our state
    useState("red") -> sets initial state to "red"
    
    */}
  const [color, setColor] = useState("red"); /* hook */

  return(
    <>
      <h1>My favorite color is {color}!</h1>

      <button 
        type="button"
        onClick={() => setColor("blue")}
        >Blue
      </button>

      <button
        type="button"
        onClick={() => setColor("red")}
        >Red
      </button>

      <button
        type="button"
        onClick={() => setColor("pink")}
        >Pink
      </button>

      <button
        type="button"
        onClick={() => setColor("green")}
        >Green
      </button>
    </>
  )
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      {/*Implementation of a function component inside of a page*/}
      <MyButton/>

      {/* Use of Hooks in React */}
      <h1>This is my favorite color: </h1>
      <FavoriteColor/>
    </div>
  );
}