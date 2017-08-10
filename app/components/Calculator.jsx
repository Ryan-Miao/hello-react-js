import React from 'react'
import {TemperatureInput} from './TemperatureInput.jsx'

export class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleChange(e){
        let temperature = e.target.value;
        console.log("input: ", temperature);
        this.setState({temperature: temperature});
    }

    handleCelsiusChange(temperature) {
        console.log("handle celsius:", temperature);
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature){
        console.log("handle fahrenheit:", temperature);
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius):temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>

                //此处，将handleCelsiusChange方法传递给onTemperatureChange,相当于java8里的lambda，定义一个函数是接口，传递lambda表达式作为内容逻辑。此处handleCelsiusChange就是一个lambda表达式。
                //而onTemperature将作为TemperatureInput这个class的一个props属性，并在input onChange的时候调用这个属性。实现了onChange内容由外层传递进去的结果。
                <TemperatureInput scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>

                <TemperatureInput scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>
            </div>
        );
    }
}

function BoilingVerdict(props){
    if (props.celsius>=100){
        return <p>The water would boil.</p>
    }

    return <p>The water would not boil.</p>
}


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 /9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 /5) +32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) /1000;
    return rounded.toString();
}
