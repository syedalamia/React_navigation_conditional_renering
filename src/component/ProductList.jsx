import React,{useState} from 'react'

export default function ProductList(props) {


    const [product,setProduct] = useState([
        {
        name: 'Samsung',
        price: '1000',
        category: 'china phone',
        },
        {
        name: 'Nokia',
        price: '1000',
        category: 'london phone',
        },
        {
        name: 'Motorola',
        price: '1000',
        category: 'korean phone',
        },
    
        ])

    return (
  
        <>
        <h1>List of all mobile phones</h1>
        {
            product.map((data,index)=>{
                return (
                <>
                
                <h2 >Item - {index+1}</h2> 
                <h2>{data.name}</h2>
                <button  onClick={()=>{props.getClicked(index,product)}}>See Details</button>

                         
                </>
                
                
                )

                
            })

            
        }


    </>
    )
}
