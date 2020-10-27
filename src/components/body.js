import React, { Component } from "react";


export default class Body extends Component {
    render() {
        var page = null;
        React.Children.map(this.props.children, child => {
            if (child.props.name === this.props.pageToShow) page = child;
        });
        if (page === null) page = this.props.children[0];
        return <div>{page}</div>;
    }
}