import React from 'react'
import propTypes from 'prop-types';

function Button({ color, text, onClick }) {

  return (
    <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  colour: 'stealblue'
}

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick:propTypes.func,
}


export default Button