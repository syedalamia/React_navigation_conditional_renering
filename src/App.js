import React,{useState} from 'react'
import './App.css';
import ProductDetails from './component/ProductDetails';
import ProductList from './component/ProductList';

function App() {

  const [data, setData] = useState(0)

  const [productListing,setProducting] = useState([])

  const updateData=(value,valueProd)=>{
      setData(value)
      setProducting(valueProd)
     
  }

  const goBackpage=()=>{
    setProducting([])
  }

  return (
    <div className="App">

      {
      productListing.length?<ProductDetails data={data} listing={productListing} goBack={goBackpage}/>:<ProductList getClicked={updateData}/>
      }
  
    </div>
  );
}

export default App;
