import React, {Component} from "react";
import NavItem from "./nav-item";

export default class NavMenu extends Component{
render(){
    return (
        <div class="nav">
        <NavItem name="Logga in" className="nav-li"></NavItem>
        <NavItem name="Profil" className="nav-li"></NavItem>
        <NavItem name="FAQ" className="nav-li"></NavItem>     
    </div> 
 );
    }
}