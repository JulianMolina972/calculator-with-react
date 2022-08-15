import { useState } from 'react';
import { Button } from './components/Button';
import { ButtonClear } from './components/ButtonClear';
import { Display } from './components/Display';
import { evaluate, parse } from 'mathjs';
import { ButtonDelete } from './components/ButtonDelete';
import './App.css';

function App() {

  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  }
  
  
  // function cantRepetidos(letras) {
  //   return letras.split('').filter((c, i, a)=>a.indexOf(c) !== i).length
  // }
  
  // console.log('Caracteres repetidos:', cantRepetidos('AmnAmPP'))
  
  // const pares = input
  // let ocurencias= 0;
  // const revisados = [];
  // const caracteresRepetidos = function(str) {
  //   for (let i=0; i<str.length; i++) {
  //     if (!revisados.includes(str[i]) && str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
  //       revisados.push(str[i]);
  //       ocurencias = ocurencias+1;
  //     }
  //   }
  // return ocurencias;
  // }
  // console.log( revisados ); 
  // console.log( caracteresRepetidos(pares) );
  const calculateResult = () => {
    
    console.log(parse(input));
    if(input) {
      // console.log(!evaluate(input))
      setInput(evaluate(input));
      // console.log(input);
    } else {
      alert('Please enter an expression');
    }
  }
  // console.log(input);

  // if(input === setInput)

  const deleteInput = () => {
    setInput(input.slice(0, -1));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <main className='calculator-container'>
        <Display input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>0</Button>
          <ButtonDelete handleDelete={deleteInput}>
            DEL
          </ButtonDelete>
          <Button handleClick={addInput} >+</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}>
            Clear
          </ButtonClear>
          <Button handleClick={calculateResult}>=</Button>
        </div>

      </main>
    </div>
  );
}

export default App;
