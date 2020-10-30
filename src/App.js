import React, {Component} from "react";

import "./index.css";

import Body from "./components/body"
import Menu from "./components/seminars/seminar-menu";
import NavMenu from "./components/navigation/nav-menu";
import NavItem from "./components/navigation/nav-item";
import MainPage from "./components/pages/mainpage";
import SeminarPage from "./components/pages/seminarpage";
import LoginPage from "./components/pages/loginpage";
import ProfilePage from "./components/pages/profilepage";
import FaqPage from "./components/pages/faqpage";
import RegisteredPage from "./components/pages/registeredpage";


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = { itemClickedOn: "", item: null };
    }
    render(){
    return(
        <>
        <NavMenu onClick={(itemName) => this.setState({ itemClickedOn: itemName })}>
            <NavItem name="Hem" className="nav-li" />
            <NavItem name="Logga in" className="nav-li" />
            <NavItem name="Profil" className="nav-li" />
            <NavItem name="FAQ" className="nav-li" />
            <NavItem name="Anmäld" className="nav-li" />
        </NavMenu>
        <Body pageToShow={this.state.itemClickedOn}>
            <MainPage clickCallBack={(item) => this.setState({ itemClickedOn: "Seminar", item: { item } })} name="Hem" />
            <SeminarPage name="Seminar" item={this.state.item}/>
            <LoginPage name="Logga in" />
            <ProfilePage name="Profil" />
            <FaqPage name="FAQ" />
            <RegisteredPage name="Anmäld" />
        </Body>
        </>
    );
}
}