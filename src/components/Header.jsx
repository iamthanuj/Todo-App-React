import React from 'react'
import propTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {

    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color={showAdd? 'red' : 'green'} text={showAdd ? 'Hide' : 'Show'} onClick={onAdd} />
        </div>
    )
}



Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
    onAdd: propTypes.func,
}


export default Header