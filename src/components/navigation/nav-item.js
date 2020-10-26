import React, { Component } from "react";

export default class NavItem extends Component{
    render(){
        return(
                <div className="nav-li">{this.props.name}</div>
        );
    }
}