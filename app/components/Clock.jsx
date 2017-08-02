import React from 'react';

function FormattedDate(props) {
    return <h2> It is {props.date.toLocaleTimeString()}. </h2>
}
/**
* @Author Ryan Miao
* @Date 2017/08/02 20:58
*/
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>This is a clock!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock;



