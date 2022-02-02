import React from 'react'; //used to be required
import Button from './Button'

const Header = () => {
    //function onClick that writes to the console when user clicks
    const onClick = () => {
        console.log('Click')
    }

    return (
    //This is where you can create JSX markup 
    //for your component!
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color='green' text='Add' onClick={onClick}/>

    </header>
    );
};

//good practice to set a default props
Header.defaultProps = {
    subtitle: 'Keep track of your tasks easily with React!',
}

export default Header;
