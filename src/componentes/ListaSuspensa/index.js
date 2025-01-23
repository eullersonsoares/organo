import { Component } from "react";
import "./ListaSuspensa.css";

export class ListaSuspensa extends Component {
    render() {
        return(
            <div className="lista-suspensa">
                <label>{this.props.label}</label>
                <select onChange={evento => this.props.aoAlterado(evento.target.value)} value={this.props.valor}>
                    {this.props.itens.map(item => <option key={item.nome}>{item.nome}</option>)}
                </select>
            </div>
        )
    }
}