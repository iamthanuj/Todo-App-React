import React from 'react'
import propTypes from 'prop-types';
import Button from './Button';

function Header({ title }) {


    const onClick = ()=>{
        console.log('Hknw')
    }


    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color={"green"} text={"Add"} onClick={onClick} />
        </div>
    )
}



Header.defaultProps = {
    title: 'Task Tracker',
}


Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header