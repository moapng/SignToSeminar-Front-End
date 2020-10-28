import React, { Component } from "react";

export default class NavItem extends Component{
    render(){
        return(
                <div className="nav-li" onClick={() => this.props.onClick(this.props.name)} >{this.props.name}</div>
        );
    }
}