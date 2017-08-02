import React from 'react';
import Greeting from "./Greeting.jsx";


function LoginButton(props) {
    return (
        <button onClick={props.onClick} style={{color: 'white', background:"green"}} >
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick} style={{color: 'white', background:'red'}}>
            Logout
        </button>
    );
}

/**
* @Author Ryan Miao
* @Date 2017/08/02 20:23
*/
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        console.log("Click login");
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        console.log("Click logout");
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div style={{border: '1px solid #000'}}>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        );
    }
}
export default LoginControl;