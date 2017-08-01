import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props) {
    return (
        <div>
            <h1>Step1, learn element and variable.</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
function tick() {

    ReactDOM.render(<Clock date={new Date()} />, document.getElementById('clock'));
}
setInterval(tick, 1000);