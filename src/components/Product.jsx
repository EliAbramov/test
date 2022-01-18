import React from 'react'

export default function Product(props) {
    return (
        <div className="product">
            <h4>{props.name}</h4>
            <p>Price: {props.price}</p>
            <button style={{marginTop: "35px", width: "100px", heigth: "35px"}}>Buy</button>
        </div>
    )
}
