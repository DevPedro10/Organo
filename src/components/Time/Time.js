import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador/Colaborador';
import './Time.css'

const Time = (props) => {
    const timeStyle = {
        backgroundColor: hexToRgba(props.cor, '0.6')
    }
    const deletarColaborador = () => {
        console.log("teste")
    } 
    return (
            props.colaboradores.length > 0 && <section className='time' style={timeStyle}>
                <input className='mudaCor' type="color" value={props.cor} onChange={e => props.mudaCor(e.target.value, props.timeNome)}/>
                <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map((colaborador, indice) => (
                        <Colaborador
                            aoDeletar={deletarColaborador}
                            corDeFundo={props.cor}
                            key={`${colaborador.nome}-${indice}`}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                        />
                    ))}
                </div>
            </section>
    )
}

export default Time;