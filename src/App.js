import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Footer from './components/Footer/Footer';
import {v4 as uuidv4} from 'uuid';

const App = () => {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }));
  };

  return (
    <main className='App'>
      <Banner />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaborador(colaborador)} />
      {times.map(time => (
        <Time
          mudaCor={mudarCorDoTime}
          timeID={time.id}
          valor={time.cor}
          corDeFundo={time.cor}
          key={time.nome}
          nome={time.nome}
          cargo={time.cargo}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
      <Footer />
    </main>
  );
}

export default App;
