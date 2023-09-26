import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Footer from './components/Footer/Footer';

const App = () => {

  const [times, setTimes] = useState([
    {
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',
      cor: '#D86EBF'
    },
    {
      nome: 'Mobile',
      cor: '#FEBA05'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map(time => {
      if (time.nome === nome) {
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
          timeNome={time.nome}
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
