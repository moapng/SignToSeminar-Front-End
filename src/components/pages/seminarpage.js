import React, { Component } from 'react';
import Seminar from "../seminars/seminar-item";

export default class SeminarPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { name, description, date } = this.props.item.item;
        return (
            <>
            <h3>{name}</h3>
            <div className="menu-li-info">Beskrivning: {description}</div> 
            <div className="menu-li-info">När: {date}</div> 
            </>
        );
    }
}