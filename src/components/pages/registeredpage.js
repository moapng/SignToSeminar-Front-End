import React, { Component } from 'react';

export default class RegisteredPage extends Component {
    render() {
        const { name } = this.props.item.item;
        return (
            <div>
                skriv din epost här så är du anmäld till {name}
            </div>
        );
    }
}