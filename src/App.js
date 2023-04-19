import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const titleStyles = {backgroundColor: 'blue', borderRadius: '10px'}

function App() {

  //operador ternaria
  const [count, setCount] = useState(0) // let count = 0
  let mensajito = count < 10 ? 'Esta todo bien' : (count < 20 ? 'Te pasaste!' : 'No hay vuelta atras')

  // if(count < 10){
  //   mensajito =  'Esta todo bien'
  // } else if(count < 20) {
  //   mensajito = 'Te pasaste!'
  // } else {
  //   mensajito = 'Ya no hay vuelta atras!'
  // }  


  //spread operator
  let frutas = ['manzana', 'banana', 'kiwi', 'mandarina']
  let verduras = ['cebolla', 'ajo', 'calabaza']

  let verduleria = [...frutas, ...verduras]
  console.log(verduleria)

  //desestructuración
  //Ejemplo 1
  let [a = 1, b = 2, c = 3, d] = [4, 5, , 'palabra']
  console.log(a, b, c, d)

  //Ejemplo 2
  let [cajon1, cajon2, cajon3] = verduleria
  console.log(cajon1, cajon2, cajon3)

  // Es lo mismo que: 
  // let cajon1 = verduleria[0]
  // let cajon2 = verduleria[1]
  // let cajon3 = verduleria[2]

  //Ejemplo 3
  let obj = {
    name: 'Carlos',
    id: 145,
    email: 'carlos@gmail.com',
    ['clave' + 42]: 'credencial ' + 42, //Ejemplo de propiedad dinámica
  }
  let {name, id, email, clave42} = obj
  console.log(name, id, email, clave42)


  //Deep matching
  let {a: val} = {a: 2}
  console.log('Valor: ', val)

  //Es lo mismo que: 
  // let newObj = {
  //   a: 2
  // }

  // let val = obj.a

  return (
    <div className="App" >
      {/* Ejemplo para Operacion ternaria */}
        <h1>{count}</h1>
        <h1>{mensajito}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>

        {/* Ejemplo para Spread operator */}
        {verduleria.map((verdura, index) => <li>{index+1} - {verdura}</li>)}

        {/* Desestructuración ejemplo 3 */}
        <h1 className='titulo'>{name}</h1>
        {/* Ejemplo de transpiling JSX {React.createElement('h1', {className:'titulo'}, name)}  */} 
        <h1 className='titulo' style={titleStyles}>{id}</h1>
        <h1>{email}</h1>
        <h1>{clave42}</h1>
    </div>
  );
}

export default App;

// Función pura
const func = () => {
  let a = 1 + 2
  return a
}
//Función JSX
const funcjsx = () => {
  let a = 1 + 2
  return <h1>{a}</h1>
}