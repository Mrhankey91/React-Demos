import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TodoList from './components/todolist/TodoList';
import './styles/App.css';
import RandomGenerator from './components/randomgen/RandomGenerator';
import DropDown from './components/dropdown/DropDown';
import Timer from './components/timer/Timer';
import Shop from './components/shopping/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Link to="/shop">Webshop Demo</Link>
            <TodoList />
            <RandomGenerator />
            <DropDown />
            <Timer />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
