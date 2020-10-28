import React, {Component} from "react";

export default class Seminar extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
render(){
    return (
        <>
            <div className="menu-li" 
            onClick={() => this.props.clickCallBack(this.props.item)}>
                {this.props.item.name}
                </div>
            </>
            
        );
    }
}
