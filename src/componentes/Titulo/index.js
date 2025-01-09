import { Component } from "react";
import "./Titulo.css";

export default class Titulo extends Component {
    render() {
        return (
            <>
                <h2 className="Titulo">{this.props.title}</h2>
            </>
        )
    };
}