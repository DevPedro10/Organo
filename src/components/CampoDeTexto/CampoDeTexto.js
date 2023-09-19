import { useState } from 'react'
import './CampoDeTexto.css'

const CampoDeTexto = (props) => {



    const aoDigitado = (evento) => {    
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.obrigatorio} value={props.valor} onChange={aoDigitado} type={props.type} id={props.label} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoDeTexto;