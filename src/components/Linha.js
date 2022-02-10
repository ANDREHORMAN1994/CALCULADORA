import React from 'react';
import Botao from './Botao';

class Linha extends React.Component {
  render() {
    const { line } = this.props;

    return (
      <div className='linha'>
        {
          line.map((item, i) => (
            <Botao number={item} key={item + i} />
          ))
        }
      </div>
    )
  }
}

export default Linha;
