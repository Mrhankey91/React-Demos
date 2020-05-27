import React from 'react';
import Todo from './Todo';
import AddTodoItem from './AddTodoItem';
import '../../styles/TodoList.scss';
import uuid from "uuid/v4";

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            description: "",
            todos: [],
        }
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        try{
        const todos = localStorage.getItem("todos");
        if (todos) 
            this.setState({ todos: JSON.parse(todos) });
        }catch(event){}
    }

    onChange = (event) => {
        this.setState({ description: event.target.value });
    }

    onDelete = (id) => { 
        this.setState({todos: this.state.todos.filter(item => item.id !== id)}, () => {localStorage.setItem("todos", JSON.stringify(this.state.todos))});
    }

    onComplete = (id, completed) => {
        var index = this.arrayIndex(id);
        this.setState(prevState => {
            const newTodos = [...prevState.todos];
            newTodos[index].finished = completed;
            return {todos: newTodos};
        });
    }

    addItem(item) {
        let obj = { id: uuid(), description: item.description, finished: item.finished}
        
        const todos = this.state.todos.concat(obj);
        this.setState({
            todos: todos,
            id: this.state.id+1
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    arrayIndex(id){
        var index = 0;
        for(var i=0; i < this.state.todos.length; i++){
            if(this.state.todos[i].id === id){
                index = i;
                break;
            }
        }
        return index;
    }

    moveUp = (id) =>{
        var index = this.arrayIndex(id);
        if(index > 0){
            var todos = this.state.todos;
            var obj1 = this.state.todos[index];
            var obj2 = this.state.todos[index-1];
            todos[index-1] = obj1;
            todos[index] = obj2;

            this.setState({
                todos: todos,
            });
        }
    }
    moveDown = (id) =>{
        var index = this.arrayIndex(id);
        if(index < this.state.todos.length-1){
            var todos = this.state.todos;
            var obj1 = this.state.todos[index];
            var obj2 = this.state.todos[index+1];
            todos[index+1] = obj1;
            todos[index] = obj2;

            this.setState({
                todos: todos,
            });
        }
    }

    render(){
        return(
            <div className="todo-list">
                <h1>Todo List</h1>
                <AddTodoItem id={this.state.id} addItem={this.addItem} />
                <div className="todo-items">  {
                    this.state.todos.map((item, index) => (
                        <Todo index={index} id={item.id} description={item.description} finished={item.finished} moveUp={this.moveUp} moveDown={this.moveDown} onDelete={this.onDelete} onComplete={this.onComplete} />
                    ))
                    }
                </div>
                <a href="https://github.com/Mrhankey91/React-Demos/tree/master/src/components/todolist" target="blank">Source</a>
            </div>
        )
    }
}

export default TodoList;