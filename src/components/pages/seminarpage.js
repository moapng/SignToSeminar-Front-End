import React, { Component } from 'react';
import Seminar from "../seminars/seminar-item";

export default class SeminarPage extends Component {
    render() {
        return (
            <>
            <div>
                <Seminar name={this.item.props.name} description={this.item.props.description} date={this.item.props.date} className="menu-li"></Seminar>
            </div>
            <div className="menu-li-info">Beskrivning: {this.props.description}</div> 
            <div className="menu-li-info">När: {this.props.date}</div> 
            </>
        );
    }
}