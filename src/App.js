import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Footer from './components/Footer/Footer';

const App = () => {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <main className='App'>
      <Banner />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaborador(colaborador)} />
      {times.map(time => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
      ))}
      <Footer />
    </main>
  );
}

export default App;
