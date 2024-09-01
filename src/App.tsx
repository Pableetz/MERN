import React from 'react';
import logo from './logo.svg';
import './App.css';
import Affichage from './Components/Props/Props';
import Affichage2 from './Components/Props/Props';
import Counter from './Components/State/CounterState';
import TaskManager from './Components/TaskManager/TaskManager';
import ContactManager from './Components/ContactManager/ContactManager';

function App() {
  return (
    <div className="App">
      {/* <Affichage nom="Michel" age={28}/> */}
      {/* <Affichage2 /> */}
      {/* <Counter initialValue={0} />
      <TaskManager/> */}
      <ContactManager/>
    </div>
  );
}

export default App;
