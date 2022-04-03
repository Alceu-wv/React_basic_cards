import React, { Component } from "react";

class Atores extends Component {
    constructor(props) {
        super(props);

        this.criarAtores = this.criarAtores.bind(this);
    }

    criarAtores(ator) {
        return <li key={ator.key}>{ator.text}</li>
    }

    render() {
        var listaAtores = this.props.atores;
        var listaItens = listaAtores.map(this.criarAtores);

        return <ul className="lista">{listaItens}</ul>
    }
}

export default Atores