import React from 'react';

class ActionLink extends React.Component{

    constructor(props){
        super(props);
        this.num = 1;

        // this.handleClick =this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        // console.log(this.num);
        console.log("The link was clicked. PreventDefault event.");
    }

    render(){
        return (
            <a href="https://www.baidu.com" onClick={this.handleClick}>
                Click me
            </a>
        );
    }
}

export default ActionLink;