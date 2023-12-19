import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleClick = () => {
        this.setState(prevState => {
            return {counter: prevState.counter + 1}
        })
    }

    resetClick = () => {
        this.setState(() => {
            return {counter: 0}
        });
    }

    decrement = () => {
        this.setState(prevState => {
            return {counter: prevState.counter - 1};
        })
        
        if(this.state.counter < 1) {
            alert("it's less than 0");
            return "Il ya 0 seconds";
        }
    }

    render() {
        
        return(
            <div>
                Il ya { this.state.counter } seconds <br />
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={this.resetClick}>Reset!</button>
                <button onClick={this.decrement}>Decremnet</button>
            </div>
        )
    }
};