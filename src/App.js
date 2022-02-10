import React from 'react';
import Linha from './components/Linha';
import './App.css';

const INITIAL_STATE = {
  calculadora: [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '+'],
    [0, '.', '=', '-'],
  ],
  value1: '',
  value2: '',
  operacao: '',
};

class App extends React.Component {
  state = { ...INITIAL_STATE, total: 0, resultado: 0 };

  verificacao = (condicao, action) => {
    if (condicao) {
      this.setState({ total: 0 }, () => {
        this.setState(prevState => ({
          [action.name]: prevState[action.name] + action.value,
          total: prevState[action.name] + action.value,
        }));
      })
    }
  };

  handleClick = ({ target }) => {
    const { value1, value2, operacao } = this.state;
    const originValue = target.innerText;
    const value = parseInt(target.innerText);

    if (originValue === '=') {
      this.operacaoCalculadora(value1, value2, operacao);
      return this.setState({
        ...INITIAL_STATE,
      });
    }

    this.verificacao(isNaN(value) && originValue !== '=', {
      name: 'operacao',
      value: originValue,
    });
    this.verificacao(!isNaN(value) && operacao, {
      name: 'value2',
      value: value,
    });
    this.verificacao(!operacao && !isNaN(value), {
      name: 'value1',
      value: value,
    });
  };

  operacaoCalculadora = (value1, value2, operacao) => {
    const { resultado } = this.state;
    const soma = +resultado + +value1 + +value2;
    const sub = +resultado - +value1 - +value2;
    const novoResultado = operacao === '+' ? soma : sub;
    this.setState({ resultado: novoResultado });
  };

  render() {
    const { calculadora, total } = this.state;

    return (
      <div className='App'>
        <h1>Calculadora Trybe</h1>
        <div className='resultado'>{total}</div>
        {calculadora.map((linha, i) => (
          <Linha line={linha} key={i} handleClick={this.handleClick} />
        ))}
      </div>
    );
  }
}

export default App;
