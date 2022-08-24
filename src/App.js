import { useState } from 'react';
import { Button } from './components/Button';
import { ButtonClear } from './components/ButtonClear';
import { Display } from './components/Display';
import { evaluate } from 'mathjs';
import { ButtonDelete } from './components/ButtonDelete';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  
  const addInput = (value) => {
    if(input.length < 16) {
      setInput(input + value);
    }
  }

  const calculateResult = () => {
    try {
      if(input) {
        setInput(evaluate(input).toString());
      } else {
        alert('Please enter an expression');
      }
    } catch (error) {
      setInput('Syntax Error');
      setTimeout(() => {
        setInput('');
      }, 1500)
    }
    
  }


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
          <ButtonClear handleClear={() => setInput('')} >
            Clear
          </ButtonClear>
          <Button handleClick={calculateResult}>=</Button>
        </div>

      </main>
    </div>
  );
}

export default App;
