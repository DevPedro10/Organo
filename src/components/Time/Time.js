import Colaborador from '../Colaborador/Colaborador';
import './Time.css'

const Time = (props) => {
    const timeStyle = {
        backgroundColor: props.corSecundaria
    }
    return (
            props.colaboradores.length > 0 ? <section className='time' style={timeStyle}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map((colaborador, indice) => (
                        <Colaborador
                            corDeFundo={props.corPrimaria}
                            key={`${colaborador.nome}-${indice}`}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                        />
                    ))}

                </div>
            </section>
            : ''
    )
}

export default Time;