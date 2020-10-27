import React, {Component} from "react";

import "./index.css";

import Body from "./components/body"
import Menu from "./components/seminars/seminar-menu";
import Seminar from "./components/seminars/seminar-item";
import NavMenu from "./components/navigation/nav-menu";
import NavItem from "./components/navigation/nav-item";
import MainPage from "./components/pages/mainpage";
import SeminarPage from "./components/pages/seminarpage";
import LoginPage from "./components/pages/loginpage";
import ProfilePage from "./components/pages/profilepage";
import FaqPage from "./components/pages/faqpage";


export default class App extends Component{
    constructor(){
        super();
        this.state = { itemClickedOn: "" }
    }
    render(){
    return(
        <>
        <NavMenu onClick={(itemName) => this.setState({ itemClickedOn: itemName })}>
            <NavItem name="Hem" className="nav-li"/>
            <NavItem name="Logga in" className="nav-li" />
            <NavItem name="FAQ" className="nav-li" />
        </NavMenu>
        <Body pageToShow={this.state.itemClickedOn}>
            <MainPage name="Hem"/>
            <SeminarPage name="Seminar"/>
            <LoginPage name="Logga in"/>
            <ProfilePage name="Profil"/>
            <FaqPage name="FAQ"/>
        </Body>
        </>
    );
}
}