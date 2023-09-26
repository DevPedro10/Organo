import './Colaborador.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar }) => {
    const acessibilidadeFotoDePerfil = `Foto de perfil de ${nome}`
    return (
        <section className='colaborador'>
            <div className='deletarColaborador' onClick={aoDeletar}>
            <FontAwesomeIcon className="iconCircleXmark" icon={faCircleXmark} size='2xl' />
            </div>
            <div className='backgroundImage' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={acessibilidadeFotoDePerfil} className='imgColaborador' />
            </div>
            <div className='informacoes'>
                <h4 className='nomeColaborador'>{nome}</h4>
                <h5 className='cargoColaborador'>{cargo}</h5>
            </div>
        </section>
    )
}

export default Colaborador;