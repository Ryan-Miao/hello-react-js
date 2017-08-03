import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            color: 'red'
        };

        //This bind is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("this=", this);
        this.setState(
            prevStat => ({
                isToggleOn: !prevStat.isToggleOn,
                color: prevStat.color==='red'? 'green':'red'
            })
        );
    }

    render() {
        return (
            <button onClick={this.handleClick} style={{background: this.state.color}}>
                {this.state.isToggleOn ? 'ON':'OFF'}
            </button>
        );
    }
}

export default Toggle;