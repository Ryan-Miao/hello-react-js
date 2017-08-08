import React,{Component} from 'react';

export class EssayForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "Please write something."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert("An essy is submitted: " + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Say:
                    <textarea value={this.state.value} onChange = {this.handleChange}/>
                </label>

                <input type="submit" value="submit"/>
            </form>

        );
    }
}