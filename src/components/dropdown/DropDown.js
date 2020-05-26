import React from 'react';
import '../../styles/DropDown.scss';

class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: React.createRef(null),
            selectedItem: 0,
            searching: false,
            search: "",
            items: ["Apple", "Banana", "Blackberry", "Cherry", "Coconut", "Peach", "Pineapple", "Raspberry"],
        };
        this.openMenu = this.openMenu.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    openMenu(){
        this.setState({searching: true});
        this.state.searchInput.current.focus();
    }

    selectItem(id){
        this.setState({selectedItem: id, search: "", searching: false});
    }

    onChange(event){
        if(event.target.value === "")
            this.setState({searching: false, search: ""});
        else
            this.setState({search: event.target.value});
    }

    showItem(index){
        if(this.state.searching && this.state.search !== ""){
            return this.state.items[index].toLowerCase().includes(this.state.search.toLowerCase());
        }
        else{ return true; }
    }

    render(){
        return(
            <div className="dropdown-menu">
                <p className={"dropdown-button" + (this.state.searching ? " none" : "")} onClick={() => this.openMenu()}>{this.state.items[this.state.selectedItem]}</p>
                <input ref={this.state.searchInput} className={"" + (this.state.searching ? "" : " none")} type="text" placeholder="Search.." onChange={this.onChange}/>

                <ul className="dropdown-options" >
                    {
                        this.state.items.map((name, index) => {
                            if(this.showItem(index)){
                                return(
                                <div>
                                    <li className="dropdown-item" onClick={() => this.selectItem(index)}>{name}</li>
                                    <div className="dropdown-listline"></div>
                                </div>);
                            }else{
                                return(null);
                            }
                    })}
                </ul>
            </div>
        );
    }
}

export default DropDown;