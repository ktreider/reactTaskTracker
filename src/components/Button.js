import PropTypes from 'prop-types'
import React from 'react'; //unneeded

const Button = (props) => {
    
    //add even onClick, set to function {onClick}
    return <button 
            onClick={props.onClick} 
            className='btn' 
            style={{backgroundColor: props.color}}
            >
        {props.text}
        </button>;
};




Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,

}

export default Button;
