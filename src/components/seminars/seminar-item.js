import React, {Component} from "react";

export default class Seminar extends Component{
render(){
    return (
            <div className="menu-li">{this.props.name}</div>  
        );
    }
}
