import { Component } from "react";
import "./Botao.css";

export class Botao extends Component {
    render() {
        return (
            <button className="botao">
                {this.props.texto}
            </button>
        )
    }
}