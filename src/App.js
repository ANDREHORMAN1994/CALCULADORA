import React from 'react';
import Linha from './components/Linha';
import './App.css';

class App extends React.Component {
  state = {
    calculadora: [
      [7, 8, 9, '/'],
      [4, 5, 6, '*'],
      [1, 2, 3, '+'],
      [0, '.', '=', '-'],
    ]
  }

  render() {
    const { calculadora } = this.state;

    return (
      <div className="App">
        <h1>Calculadora Trybe</h1>
        <div className='resultado'>
          0
        </div>
        {
          calculadora.map((linha, i) => (
            <Linha line={linha} key={i} />
          ))
        }
        
      </div>
    );
  }
}

export default App;
