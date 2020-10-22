import React, {Component} from "react";
import Seminar from "./seminar";

export default class Menu extends Component{
    constructor(){
        super();
        this.state = {seminars: [{name: "hej"}]}
    }
    componentDidMount(){
        this.fetchSeminars();
    }
    fetchSeminars(){
        fetch("https://localhost:44318/seminar")
        .then((response) => response.json())
        .then((json) => this.setState({seminars: json}))
    }
render(){
    return (
        <div className="menu">
            {this.state.seminars.map(item => (<Seminar name={item.name} className="menu-li"></Seminar>))}
         </div> 
 );
    }
}