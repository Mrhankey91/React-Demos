import React from 'react';
import '../../styles/RandomGenerator.scss';

class RandomGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state = {min: 0, max: 10, random: 0}

        this.onSubmit = this.onSubmit.bind(this);
        this.onMinChange = this.onMinChange.bind(this);
        this.onMaxChange = this.onMaxChange.bind(this);
    }

    onMinChange(event){
        if(!isNaN(event.target.value)){
            if(event.target.value === '')
                this.setState({min: 0});
            else
                this.setState({min: parseInt(event.target.value)});
        }
    }
    onMaxChange(event){
        if(!isNaN(event.target.value)){
            if(event.target.value === '')
                this.setState({max: 1});
            else
                this.setState({max: parseInt(event.target.value)});
        }
    }

    onSubmit(event){
        event.preventDefault();
        const rand = Math.round(this.state.min + Math.random() * (this.state.max - this.state.min));
        this.setState({random: rand});
    }

    render(){
        return(
            <div className="random-gen">
                <h1>Random Generator</h1>
                <p className="m0 text-size-15">Your number is: {this.state.random}</p>
                <form className="generator" onSubmit={this.onSubmit} >
                    <input value={this.state.min} onChange={this.onMinChange} required="true" inputMode="numeric" />
                    <input value={this.state.max} onChange={this.onMaxChange} required="true" inputMode="numeric" />
                    <button className="submit">Generate</button>
                </form>
                <a href="https://github.com/Mrhankey91/React-Demos/tree/master/src/components/randomgen" target="blank">Source</a>
            </div>
        );
    }
}

export default RandomGenerator;