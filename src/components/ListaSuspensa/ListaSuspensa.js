import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='suspend-list'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                <option value="" disabled>Selecione um time</option>
                {props.itens.map(item => ( 
                    <option key={item}>{item}</option>
                    ))}
            </select>
        </div>
    )
}

export default ListaSuspensa