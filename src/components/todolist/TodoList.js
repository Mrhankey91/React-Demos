import React from 'react';
import Todo from './Todo';
import AddTodoItem from './AddTodoItem';
import '../../styles/TodoList.scss';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            description: "",
            todos: []
        }
        this.addItem = this.addItem.bind(this);
    }

    onChange = (event) => {
        this.setState({ description: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState(state => {
            const todos = [...state.todos, state.description, state.id];
       
            return {
              todos,
              description: "",
              id: state.id+1
            };
        })
    }

    onDelete = (id) => { 
        this.setState({todos: this.state.todos.filter(item => item.id !== id)});
    }

    onComplete = (id, completed) => {
        var index = 0;
        for(var i=0; i < this.state.todos.length; i++){
            if(this.state.todos[i].id === id){
                index = i;
                break;
            }
        }
        this.setState(prevState => {
            const newTodos = [...prevState.todos];
            newTodos[index].finished = completed;
            return {todos: newTodos};
        });
    }

    addItem(item) {
        let obj = { id: this.state.id, description: item.description, finished: item.finished}
        this.setState({
            todos: this.state.todos.concat(obj),
            id: this.state.id+1
        });
    }

    render(){
        return(
            <div className="todo-list">
                {/*<form className="" onSubmit={this.onSubmit} >
                    <input value={this.state.description} onChange={this.onChange} />
                    <button>Submit</button>
                </form>*/}
                <h1>Todo List</h1>
                <AddTodoItem id={this.state.id} addItem={this.addItem} />
                <div className="todo-items">  {
                    this.state.todos.map((item, index) => (
                        <Todo index={index} id={item.id} description={item.description} finished={item.finished} onDelete={this.onDelete} onComplete={this.onComplete} />
                    ))
                    }
                </div>
                <a href="https://github.com/Mrhankey91/React-Demos/tree/master/src/components/todolist" target="blank">Source</a>
            </div>
        )
    }
}

export default TodoList;