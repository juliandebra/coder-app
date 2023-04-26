import logo from './logo.svg';
import './App.css';
import ParentComponent from './Components/ParentComponent';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count + 1)
    console.log('Dentro de la función: ',count)
  }
  const restar = () => {
    setCount(count - 1)
  }
  console.log('Fuera de la función: ',count)
  return (
    <div className="App" >
      {/* Props */}
      <h1>Bienvenidos a CH</h1>
      <ParentComponent />

      {/* Estados */}
      <button onClick={sumar}>+</button>
      <h1>{count}</h1>
      <button onClick={restar}>-</button>
    </div>
  );
}

export default App;

