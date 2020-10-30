import React, { Component } from 'react';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {emailAdress: ''};
    }
    componentDidMount(){
        this.addUserEmail();
    }
    addUserEmail(){
        
        fetch('https://localhost:44318/user',
        {
            method: 'POST',
            body: JSON.stringify({
            emailAdress: this.state.emailAdress
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }

    render() {
        
        return (
                <form>
                <label for="uName">Email</label>
                <br/>
                <input type="text" id="uName" name="uName"></input>
                <br/>
                <label for="pword">Lösenord</label>
                <input type="submit" value="Login"
                onClick={() =>  this.addUserEmail}></input>
                </form>
        );
    }
}