import React from "react";

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


function App(){
    return(
        <div>
        <NavMenu>
            <NavItem name="Logga in" className="nav-li" />
            <NavItem name="Profil" className="nav-li" />
            <NavItem name="FAQ" className="nav-li" />
        </NavMenu>
        <Body>
            <MainPage/>
            <SeminarPage/>
            <LoginPage/>
            <ProfilePage/>
        </Body>
        </div>
    );
}
export default App;