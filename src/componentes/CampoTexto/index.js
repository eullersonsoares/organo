import "./CampoTexto.css";


const CampoTexto = (propos) => {
    return (
        <div className="campo-texto">
            <label>{propos.label}</label>
            <input type="text" placeholder={propos.placeholder}/>
        </div>
    )
};

export default CampoTexto;