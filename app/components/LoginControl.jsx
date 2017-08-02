import React from 'react';
// import Greeting from "./Greeting.jsx";


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}


class LoginControl extends React.Component {

    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn : false}
    }

    handleLoginClick(){
        console.log("Click login.");
        this.setState({isLoggedIn:true});
    }

    handleLogoutClick(){

        console.log("Click logout.");
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLoginClick}/>
        }else {
            button = <LoginButton onClick={this.handleLogoutClick}/>
        }

        return (
            <div>
                {button}
            </div>

        );
    }

}

export default LoginControl;