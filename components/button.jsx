import { useState } from 'react'
import Edit from '../src/assets/edit.svg'

function Button() {

    return (
        <>
            <div className="btn-container">
                <div className="button">
                    <span>Compose</span>
                    <img src={Edit} alt="edit" className="edit" />
                </div>
            </div>
        </>
    )
}

export default Button