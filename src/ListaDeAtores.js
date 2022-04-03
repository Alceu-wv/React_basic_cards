import React, { Component } from "react";
import Atores from "./Atores"

class ListaDeAtores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            atores: [],
            ator: ''
        };

        this.adicionarAtor = this.adicionarAtor.bind(this)
        this.alterarAtor = this.alterarAtor.bind(this);
    }

    adicionarAtor(e) {
        var itensArray = this.state.atores;

        if (this.state.ator !== '') {
            itensArray.unshift({
                text: this.state.ator,
                key: Date.now()
            });
            this.setState({
                atores: itensArray,
                ator: ''
            });
        }
        e.preventDefault();
    }

    alterarAtor(e) {
        this.setState({
            ator: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.adicionarAtor}>
                        <input placeholder="Nome" value={this.state.ator} onChange={this.alterarAtor}/>
                        <button type="submit">Adicionar</button>
                    </form>
                </div>
                <Atores atores={this.state.atores} />
            </div>
        )
    }
}

export default ListaDeAtores