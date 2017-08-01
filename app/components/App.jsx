import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello World! Hi ReactJS!</h1>

                <div>
                    <Clock />
                </div>
            </div>
        );
    }
}

export default App;
