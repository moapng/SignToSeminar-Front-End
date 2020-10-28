import React, { Component } from 'react';

export default class LoginPage extends Component {
    render() {
        return (
                <form className="menu">
                    <label for="uName">Email</label>
                    <br/>
                    <input type="text" id="uName" name="uName"></input>
                    <br/>
                    <label for="password">Lösenord</label>
                    <br/>
                    <input type="text" id="password" name="password"></input>
                    <br/>
                    <input type="submit" value="Logga in"></input>
                </form>
        );
    }
}