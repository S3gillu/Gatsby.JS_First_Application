import React, { Component } from 'react';
import Link from "gatsby-link";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h1 style={{color : 'orangered'}}>Counter</h1>
                <p style={{ color: 'orangered' }}>current count : {this.state.count} </p>
                <button style={{ color: 'orangered' }} onClick={() => this.setState({ count: this.state.count + 1 })}>Plus (+)</button> &nbsp;
                <button style={{ color: 'orangered' }} onClick={() => this.setState({ count: this.state.count - 1 })}>Minus (-)</button>
                <div>
                    <br />
                    <Link to="/"> Home </Link>
                </div>
            </div>
        );
    }
}

export default Counter;