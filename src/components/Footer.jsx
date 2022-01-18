import React from 'react'
import Team from './Team';


export default function Footer() {
    return (
        <div style={{marginTop: "55px"}}>
            <footer>
                <div>Powered by</div><Team />
            </footer>
        </div>
    )
}
