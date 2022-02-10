import React from 'react';
import Botao from './Botao';

class Linha extends React.Component {
  render() {
    const { line, handleClick } = this.props;

    return (
      <div className='linha'>
        {
          line.map((item, i) => (
            <Botao
              number={item}
              key={item + i}
              handleClick={handleClick}
            />
          ))
        }
      </div>
    )
  }
}

export default Linha;
