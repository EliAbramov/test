import React from 'react'
import Product from './Product'

export default function Products(props) {
    return (
        <div>
            <h3>Products</h3>
            {props.list.map(p=>{
                return <Product name={p.name} price={p.price} />
            })}
        </div>
    )
}
