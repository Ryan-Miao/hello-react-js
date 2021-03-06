import React from 'react';
/**
 * 大括号包裹, 可以使用行操作符
* @Author Ryan Miao
* @Date 2017/08/03 22:33
*/
class Mailbox extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello!</h1>
                {this.props.unreadMessages!=null && this.props.unreadMessages.length > 0 &&
                <h2>
                    You have {this.props.unreadMessages.length} unread messages.
                </h2>
                }
            </div>
        );
    }
}

export default Mailbox;