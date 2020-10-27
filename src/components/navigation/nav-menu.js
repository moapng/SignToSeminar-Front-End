import React, {Component} from "react";

export default class NavMenu extends Component{
render(){
    return (
             <div className="nav">
                 {React.Children.map(this.props.children, (child) => {
                 return React.cloneElement(child, { onClick: this.props.onClick });
             })}
             </div>
        );
    }
}