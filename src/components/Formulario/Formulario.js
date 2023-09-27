import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoDeTexto from "../CampoDeTexto/CampoDeTexto";
import CampoDeCor from "../CampoDeCor/CampoDeCor";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css'

const Formulario = ({ colaboradorCadastrado, times, cadastrarTime }) => {

    const submitForm = (event) => {
        event.preventDefault();
        console.log(`O card de ${nome.split(' ')[0]} foi criado.\nInformações:
            \nNome: ${nome}
            \nCargo: ${cargo}
            \nURL da Imagem: ${imagem}
            \nTime: ${time}`)
        colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('')
        setCargo('')
        setImagem('')
    };

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#5068F1');

    return (
        <section className="formularios">
            <form onSubmit={submitForm}>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <CampoDeTexto
                    obrigatorio={true}
                    type="text"
                    id="name"
                    label="Nome"
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoDeTexto
                    obrigatorio={true}
                    type="text"
                    id="cargo"
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoDeTexto
                    obrigatorio={true}
                    type="text"
                    id="name"
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    items={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form onSubmit={e => {
                e.preventDefault();
                cadastrarTime({nome: nomeTime, cor: corTime});
            }}>
                <h1>Preencha os dados para criar um novo time</h1>
                <CampoDeTexto
                    obrigatorio
                    type="text"
                    id="nomeTime"
                    label="Nome do time"
                    placeholder="Digite o nome do novo time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoDeCor
                    obrigatorio
                    label="Cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;