import { Component } from "react";

export default class Event extends Component{
    state={msg : 'Not yet clicked'};

    changeState=()=> {
        console.log("Inside event function");
        this.setState({msg: "Button Clicked"});
    }

    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeState}>Click here</button>
            </div>
        );
    }
}