import React, { Component } from "react";

class EnderecoIP extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.ip}</h1>
                <p>Esse poderia ser seu endereço de IP</p>
            </div>
        )
    }
}

export default EnderecoIP