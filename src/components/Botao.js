import React from 'react';

class Botao extends React.Component {

  handleClick = ({ target }) => {
    console.log(target.innerText);
  }

  render() {
    const { number } = this.props;

    return (
      <button
        className='botao'
        onClick={ this.handleClick }
      >
        {number}
      </button>
    )
  }
}

export default Botao;
