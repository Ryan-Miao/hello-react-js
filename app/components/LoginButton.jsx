import React from 'react';

class LoginButton extends React.Component {

    handleClick = () => {
        console.log("this is ", this);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me, auto bind this by lambda.
            </button>
        );
    }
}

export default LoginButton;

