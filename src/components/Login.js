import { Component } from "react";

export default class Login extends Component{
    state={username:'',
           password:''};

    validate=()=>{
        if(this.state.username.length<4 && this.state.password.length <4)
        alert("Invalid Username/Password");
        else if(this.state.username!=='duke' && this.state.password !=='java')
        alert("Invalid Username/Password");
        else
        alert("Login Successful");
        }

    render(){
        return (
            <div>
                <form onSubmit={this.validate}>
                    <label>Username</label>
                    <input type="text" onChange={e=> this.setState({username: e.target.value})} /><br/>

                    <label>Password</label>
                    <input type="password" onChange={e=> this.setState({password: e.target.value})} /><br/>
                    <button type="submit">Login</button>
                </form>
                <hr/>
                Username: {this.state.username}<br/>
                Password: {this.state.password}
            </div>
        )
    }
}