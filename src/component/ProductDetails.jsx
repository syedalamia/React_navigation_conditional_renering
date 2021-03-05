import React from 'react'

export default function ProductDetails(props) {

    return (
        <div>
            <h1>Details of product</h1>
            <p>Name of Product : {props.listing[props.data].name}</p>
            <p>Price of Product :{props.listing[props.data].price}</p>
            <p>Category of Product :{props.listing[props.data].category}</p>
            <button onClick={props.goBack}>Go back</button>


            
        </div>
    )
}
