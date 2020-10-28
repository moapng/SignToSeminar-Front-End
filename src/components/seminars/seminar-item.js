import React, {Component} from "react";
import SeminarPage from "../pages/seminarpage";

export default class Seminar extends Component{
render(){
    return (
        <>
            <div className="menu-li" onClick={() => this.props.onClick()}>{this.props.name}</div>
            
        </>
        );
    }
}
