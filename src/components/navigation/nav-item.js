import React, { Component } from "react";

export default class NavItem extends Component{
    render(){
        return(
                <div onClick={() => this.props.onClick(this.props.name)} className="nav-li">{this.props.name}</div>
        );
    }
}