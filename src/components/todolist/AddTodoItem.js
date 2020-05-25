import React from 'react';

class AddTodoItem extends React.Component{
    constructor(props){
        super(props);
        this.item = { id: this.props.id, description: "", finished: false};

        this.state = {description: ""}
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({description: event.target.value});
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.item.description = this.state.description;
        this.item.finished = false;
        this.props.addItem(this.item);
    }

    render(){
        return(
            <div>
                <form className="todo-input" onSubmit={this.onSubmit} >
                    <input value={this.state.description} onChange={this.onChange} required="true"/>
                    <button className="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodoItem;