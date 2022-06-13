import React from "react";

export class Form extends React.Component {
    state = {
        name: 'gb',
        count: 0,
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <>
                <div>Hello, {this.state.count}</div>
                <button onClick={this.handleClick}>click</button>
                <p>Name: {this.state.name}</p>
                <input type="text" onChange={this.handleChange} value={this.state.name} />
            </>
        );
    }
}