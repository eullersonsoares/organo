import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Fomulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: 'Front-End',
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: 'Data Science',
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: 'Devops',
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: 'Ux e Design',
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: 'Mobile',
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: 'Invação e Gestão',
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador);
    //debugger
    setColaboradores([...colaboradores, colaborador]);
  };  

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => { aoNovoColaboradorAdicionado(colaborador) }} times={times.map(time => time.nome)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
