import React, {Component} from "react";

export default class Seminar extends Component{
render(){
    return (
            <div className="menu-li" onClick={() => this.props.onClick(this.props.name)}>{this.props.name}</div>  
        );
    }
}
