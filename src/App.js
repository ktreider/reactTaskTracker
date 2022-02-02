//import the header component here
import Header from './components/Header'
import Tasks from './components/Tasks'
import Counter from './components/Counter'

//import useState 
import { useState } from 'react'

//this is the root app component
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
  ])

  return (
    //looks like HTML but this is that JSX 
    //className is the new 'class' 
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>


      <div className="container">
        <Counter />
      </div>
    </div>
  );
}

export default App;
