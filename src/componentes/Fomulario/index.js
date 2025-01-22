import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Invação e Gestão'
    ];

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log("Form submetido");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha o dados para para criar o colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"  obrigatorio={true}/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"  obrigatorio={true}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times} obrigatorio={true}/>
                <Botao texto="Criar card"/>
            </form>
        </section>
    )
};

export default Formulario;