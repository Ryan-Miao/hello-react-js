import React from 'react'
/**
 * 循环变量必须有unique key
* @Author Ryan Miao
* @Date 2017/08/03/ 23:03
*/
class NumberList extends React.Component {

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <li key={number}>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default NumberList;