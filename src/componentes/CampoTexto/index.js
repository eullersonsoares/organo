import "./CampoTexto.css";

const CampoTexto = (props) => {

    let valor = '';

    const aoDigitado = (evento) => {
        valor = evento.target.value;
        console.log(valor);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} required={props.obrigatorio} onChange={aoDigitado}/>
        </div>
    )
};

export default CampoTexto;