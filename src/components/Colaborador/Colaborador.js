import './Colaborador.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHeartCircleCheck, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
const Colaborador = ({ colaborador, nome, cargo, imagem, corDeFundo, aoDeletar, statusFavorito }) => {
    const acessibilidadeFotoDePerfil = `Foto de perfil de ${nome}`

    function favorito() {
        statusFavorito(colaborador.id)
    }

    const styleIcon = {
        color: '#ff0000' 
    }

    const propsFavoritos = {
        "size": '25',
        onClick: favorito
        }

    

    return (
        <section className='colaborador'>
            <div className='deletarColaborador' onClick={e => aoDeletar(colaborador.id)}>
                <FontAwesomeIcon
                    className="iconCircleXmark"
                    icon={faCircleXmark}
                    size='xl' />
            </div>
            <div className='backgroundImage' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={acessibilidadeFotoDePerfil} className='imgColaborador' />
            </div>
            <div className='informacoes'>
                <h4 className='nomeColaborador'>{nome}</h4>
                <h5 className='cargoColaborador'>{cargo}</h5>
                <div className='favoritar'>
                    {
                        colaborador.favorito
                            ? <AiFillHeart {...propsFavoritos} style={styleIcon} />
                            : <AiOutlineHeart {...propsFavoritos} style={styleIcon}/>
                    }
                </div>
            </div>
        </section>
    )
}

export default Colaborador;