import { useState } from 'react'
import User from './user'
import Button from './button'

function Background() {

    return (
        <>
            <div className="container">
                <h1>Your messages</h1>
                <div className="inner-container">
                    <Button />
                    <div className="user-list">
                        <User/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Background