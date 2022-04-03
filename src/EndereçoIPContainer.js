import React, { Component } from "react";
import axios from "axios"
import EnderecoIP from "./EnderecoIP"

class EnderecoIPContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endereco_ip: "..."
        };
        this.processarRequisicao = this.processarRequisicao.bind(this)
    }

    componentDidMount() {
        this.processarRequisicao();
    }

    async processarRequisicao() {
        var response = await axios.get("http://www.mocky.io/v2/5d92bb3230000073001b702b");
        this.setState({
            endereco_ip: response.data.ip
        });
    }

    render() {
        return <EnderecoIP ip={this.state.endereco_ip} />;
    }
}

export default EnderecoIPContainer