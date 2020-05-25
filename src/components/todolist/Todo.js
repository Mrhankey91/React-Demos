import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            description: "",
            finished: false
        }
    }

    componentDidMount = (props) => {
      console.log(this.props.description);
    };

    render(){
        return(
            <div className={ "todo-item" + (this.props.index%2 === 0 ? "" : " snd")}>
                <p className={"text-left" + (this.props.finished ? " finished":"")} onClick={this.props.onComplete.bind(this, this.props.id, !this.props.finished)}>{this.props.description}</p>
                <button className="remove" onClick={this.props.onDelete.bind(this, this.props.id)}>X</button>
            </div>
        )
    }
}

export default Todo;