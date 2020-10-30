import React, { Component } from 'react';

export default class SeminarPage extends Component {
    constructor(props){
        super(props);
        this.state = {emailAdress: ''};
    }
    componentDidMount(){
        this.registerToSeminar();
    }
    registerToSeminar(){
        
        fetch('https://localhost:44318/userSeminar',
        {
            method: 'POST',
            body: JSON.stringify({
            emailAdress: this.state.emailAdress
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }
    
    render() {
        const { name, description, date } = this.props.item.item;
        return (
            <div className="menu">
            <h3 className="menu-li-info">{name}</h3>
            <div className="menu-li-info"><b>Beskrivning:</b> {description}</div> 
            <div className="menu-li-info"><b>När:</b> {date}</div> 
            
                
                <form className="menu-li">
                <label for="uName">Anmäl dig till {name} - Email</label>
                <br/>
                <input type="text" id="uName" name="uName"></input>
                <br/>
                <input type="submit" value="Anmäl"
                onClick={() =>  this.registerToSeminar}></input>
                </form>
            </div>
        );
    }
}