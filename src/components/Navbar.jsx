import React from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css';

export default function Navbar() {
    return (
        <div className='row'>
            <div className="col-3"></div>
            <div className='col-2 my-nav-link'>
                <Link to="/">Main</Link>    
            </div>
            <div className='col-2 my-nav-link'>
                <Link to="/products">Products</Link>
            </div>
            <div className='col-2 my-nav-link'>
                <Link to="/about">About</Link>
            </div>
            <div className="col-3"></div>
        </div>
    )
}
