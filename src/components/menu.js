import React, {Component} from "react";
import Seminar from "./seminar";

export default class Menu extends Component{
render(){
    return (
        <div className="menu">
            <Seminar name="Hej" className="menu-li"></Seminar>
            <Seminar name="då" className="menu-li"></Seminar>
            <Seminar name="bajs" className="menu-li"></Seminar>
            <Seminar name="farväl" className="menu-li"></Seminar>
         </div> 
 );
    }
}