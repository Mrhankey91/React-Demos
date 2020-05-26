import React from 'react';
import TodoList from './components/todolist/TodoList';
import './styles/App.css';
import RandomGenerator from './components/randomgen/RandomGenerator';
import DropDown from './components/dropdown/DropDown';

function App() {
  return (
    <div className="App">
      <TodoList />
      <RandomGenerator />
      <DropDown />
    </div>
  );
}

export default App;
