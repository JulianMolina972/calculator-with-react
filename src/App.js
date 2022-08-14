import './App.css';
import { Button } from './components/Button';
import { ButtonClear } from './components/ButtonClear';
import { Display } from './components/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <main className='calculator-container'>
        <Display />
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>/</Button>
        </div>
        <ButtonClear>Clear</ButtonClear>

      </main>
    </div>
  );
}

export default App;
