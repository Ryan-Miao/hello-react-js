import React from 'react';

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log("The link was clicked. PreventDefault event.");
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

export default ActionLink;