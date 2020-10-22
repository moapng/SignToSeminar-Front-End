import React, {Component} from "react";
import Seminar from "./seminar";

export default class Menu extends Component{
    constructor(){
        super();
        this.state = {seminars: [{name: "hej"}]}
    }
render(){
    return (
        <div className="menu">
            {this.state.seminars.map(item => (<Seminar name={item.name} className="menu-li"></Seminar>))}
         </div> 
 );
    }
}