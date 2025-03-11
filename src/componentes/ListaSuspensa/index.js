import { Component } from "react";
import "./ListaSuspensa.css";

export class ListaSuspensa extends Component {
    render() {
        return(
            <div className="lista-suspensa">
                <label>{this.props.label}</label>
                <select onChange={evento => this.props.aoAlterado(evento.target.value)} value={this.props.valor}>
                    <option value=""></option>
                    {this.props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
            </div>
        )
    }
}