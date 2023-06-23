import Child from "./Child";
import { Component } from "react";

export default class Parent extends Component {
    render (){
        return (
            <div>
                <h1>Hello from Parent Component</h1>
                <Child />
            </div>    
        
        );
    }
}