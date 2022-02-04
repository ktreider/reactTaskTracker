import { useState } from 'react' //import useState hook from react directly

const Counter = (props) => {
    //name the piece of state: 'count'
    //and set a function to update the state: 'setCount'
    //call useState and set the default count to 0
    const [count, setCount] = useState(0);

    return(
        <div>
            {/* add a button with an event onClick
                onClick is then set to a function that
                sets the state 'setCount' to the current 
                state count and adds one (count+1) */}
            <button onClick = { () => setCount(count + 1)}>
                {props.text}
            </button>

            {/*Display the count*/}
            <p>
                Current Count: {count}
            </p> 
        </div>
    );
};

export default Counter;
