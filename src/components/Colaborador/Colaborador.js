import './Colaborador.css'
const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    const acessibilidadeFotoDePefil = `Foto de perfil de ${nome}`
    return(
        <section className='colaborador'>
            <div className='backgroundImage' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={acessibilidadeFotoDePefil} className='imgColaborador'/>
            </div>
            <div className='informacoes'>
                <h4 className='nomeColaborador'>{nome}</h4>
                <h5 className='cargoColaborador'>{cargo}</h5>
            </div>
        </section>
    )
}

export default Colaborador;