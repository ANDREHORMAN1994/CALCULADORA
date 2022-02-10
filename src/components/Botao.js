import React from 'react';

class Botao extends React.Component {

  render() {
    const { number, handleClick } = this.props;

    return (
      <button
        className='botao'
        onClick={ handleClick }
      >
        {number}
      </button>
    )
  }
}

export default Botao;
