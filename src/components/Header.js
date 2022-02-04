import React from 'react'; //used to be required
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
    //This is where you can create JSX markup 
    //for your component!
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>

    </header>
    );
};

//good practice to set a default props
Header.defaultProps = {
    title:'Task Tracker',
    subtitle: 'Keep track of your tasks easily with React!',
}

export default Header;
