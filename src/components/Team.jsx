import React from 'react'
import {Consumer} from '../ContextAPI'

export default function Team() {
    return (
        <Consumer>
            { value => {return <div>{value.x} {value.y} Team 2025</div>} }
        </Consumer>
    )
}
