import React,{Component} from 'react';

export class FlavorForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "coconut"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let se = event.target.value;
        console.log("select " + se);
        this.setState(
            {value: se}
        );
    }
    handleSubmit(event){
        alert("selected :"+this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}