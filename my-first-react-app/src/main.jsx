import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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

      <h1 style="mystyles">My car</h1>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  < Car />
)
