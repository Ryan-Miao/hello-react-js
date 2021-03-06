import React from 'react';
import Clock from './Clock.jsx';
import ActionLink from './ActionLink.jsx';
import LoginButton from './LoginButton.jsx'
import LoginControl from './LoginControl.jsx'
import Toggle from './Toggle.jsx'
import Mailbox from './if-eg.jsx'
import Page from './not-render-eg.jsx'
import NumberList from './list-eg.jsx'
import NumberList2 from './list2-eg.jsx'
import Blog from './list3-eg.jsx'
import NumberList4 from './list4-eg.jsx'
import NumberList5 from './list5-eg.jsx'
import NameForm from './NameForm.jsx'
import {EssayForm} from './TextareaForm.jsx'
import {FlavorForm} from './SelectForm.jsx'
import {Reservation} from './Reservation.jsx'
import {Calculator} from './Calculator.jsx'
import {SignUpDialog} from './SignUpDialog'
import FilterableProductTable from './ProductList'

class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello World! Hi ReactJS!</h1>

                <div>
                    <div style={{border: '1px solid #000'}}>
                        <Clock />
                    </div>

                    <div style={{border: '1px solid #000'}}>
                    <ActionLink />
                    </div>

                    <div style={{border: '1px solid #000'}}>
                    <LoginButton/>
                    </div>

                    <div style={{border: '1px solid #000'}}>
                    <Toggle />
                    </div>

                </div>

                <div>
                    <LoginControl />
                </div>

                <div style={{border: '1px solid #000'}}>
                    <Mailbox  unreadMessages={['React', 'Re: React', 'Re:Re: React']}/>
                    <Mailbox />
                </div>

                <div style={{border: '1px solid #000'}}>
                    <Page />
                </div>

                <div style={{border: '1px solid #000'}}>
                    <NumberList numbers={[1,2,3,4,5]} />
                    <NumberList2 numbers={[1,2,3,4,5]} />

                    <Blog posts={[
                                  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                                  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
                                ]}/>

                    <NumberList4 numbers={[1,2,3,4]} />
                    <NumberList5 numbers={[1,2,3,4,5]} />
                </div>


                <div style={{border: '1px solid #000'}}>
                    <NameForm />
                </div>

                <div style={{border: '1px solid #000'}}>
                    <EssayForm />
                </div>

                <div style={{border: '1px solid #000'}}>
                    <FlavorForm />
                </div>
                <div style={{border: '1px solid #000'}}>
                    <Reservation />
                </div>
                <div style={{border: '1px solid #000'}}>
                    <Calculator />
                </div>

                <div style={{border: '1px solid #000'}}>
                    <SignUpDialog />
                </div>

                <div style={{border: '1px solid #000'}}>
                    <FilterableProductTable products={[
                        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
                        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
                        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
                        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
                        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
                        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
                    ]} />,
                </div>
            </div>
        );
    }
}

export default App;
