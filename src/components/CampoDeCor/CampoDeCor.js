import { useState } from 'react'
import './CampoDeCor.css'

const CampoDeCor = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="color-field-container">
            <label>{props.label}</label>
            <div className='color-field-box'>
                <input required={props.obrigatorio} value={props.valor} onChange={aoDigitado} type="color" id={props.label} placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default CampoDeCor;