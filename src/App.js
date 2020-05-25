import React from 'react';
import TodoList from './components/todolist/TodoList';
import './styles/App.css';
import RandomGenerator from './components/randomgen/RandomGenerator';

function App() {
  return (
    <div className="App">
      <TodoList />
      <RandomGenerator />
    </div>
  );
}

export default App;
