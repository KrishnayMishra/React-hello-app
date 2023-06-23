import { Component } from "react";

export default class Toggle extends Component{
    state={toggle : true};

    handleEvent=() =>{
        this.setState(state=>({toggle: !state.toggle})
        );
    }

    render(){
        return (
            <button onClick={this.handleEvent}>
                {this.state.toggle ? 'ON' : 'OFF'}
            </button>
        )
    }
}