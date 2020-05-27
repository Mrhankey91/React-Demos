import React from 'react';
import TodoList from './components/todolist/TodoList';
import './styles/App.css';
import RandomGenerator from './components/randomgen/RandomGenerator';
import DropDown from './components/dropdown/DropDown';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <TodoList />
      <RandomGenerator />
      <DropDown />
      <Timer />
    </div>
  );
}

export default App;
