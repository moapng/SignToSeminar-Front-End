import React, { Component } from 'react';

export default class SeminarPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { name, description, date } = this.props.item.item;
        return (
            <div className="menu">
            <h3 className="menu-li-info">{name}</h3>
            <div className="menu-li-info"><b>Beskrivning:</b> {description}</div> 
            <div className="menu-li-info"><b>När:</b> {date}</div> 
            <div className="menu-li">Anmäl dig till <i>{name}</i></div>
            </div>
        );
    }
}