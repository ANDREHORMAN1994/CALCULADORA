import React from 'react';

class Botao extends React.Component {
  render() {
    const { number } = this.props;

    return (
      <p className='botao'>
        {number}
      </p>
    )
  }
}

export default Botao;
