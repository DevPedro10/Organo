import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Footer from './components/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

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
    const colaboradorNovo = { ...colaborador, favorito: false, id: uuidv4() }
    setColaboradores([...colaboradores, colaboradorNovo])
  }


  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }));
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  const verificaStatusFavorito = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <main className='App'>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaborador(colaborador)} />
      {times.map(time => (
        <Time
          statusFavorito={verificaStatusFavorito}
          aoDeletar={deletarColaborador}
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
