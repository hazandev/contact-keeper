import React, {Fragment }from 'react'
import spinner from './spinner.gif';

const Spinner = () => {

    const spinnerStyle = {width:'200px', height: '200px' ,margin: 'auto', display: 'block'}
    return (
        <Fragment>
            <img src= {spinner} alt="spinner" style = {spinnerStyle} />
        </Fragment>
    )
}

export default Spinner;