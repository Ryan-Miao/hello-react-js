import React from 'react';
import Clock from './Clock.jsx';
import ActionLink from './ActionLink.jsx';
import LoginButton from './LoginButton.jsx'
import LoginControl from './LoginControl.jsx'

class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello World! Hi ReactJS!</h1>

                <div>
                    <Clock />
                    <ActionLink />
                    <LoginButton/>
                </div>

                <div>
                    <LoginControl />
                </div>
            </div>
        );
    }
}

export default App;
