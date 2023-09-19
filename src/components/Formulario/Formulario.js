import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoDeTexto from "../CampoDeTexto/CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css'

const Formulario = (props) => {

    const submitForm = (event) => {
        event.preventDefault();
        console.log(`O card de ${nome.split(' ')[0]} foi criado.\nInformações:
            \nNome: ${nome}
            \nCargo: ${cargo}
            \nURL da Imagem: ${imagem}
            \nTime: ${time}`)
        props.colaboradorCadastrado({
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

    return (
        <section className="formulario">
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
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;