import React, {Component} from "react";

export default class NavMenu extends Component{
render(){
    return (
             <div className="nav">{this.props.children}</div>
        );
    }
}