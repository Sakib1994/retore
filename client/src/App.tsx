import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    {name: 'Product1', price: 100.00},
    {name: 'Product2', price: 200.00},
    {name: 'Product3', price: 300.00},
    {name: 'Product4', price: 400.00}
  ]);
  function addProduct() {
    setProducts(prevState=>[...prevState,{name: 'Product'+(prevState.length+1), price: (prevState.length+1)*100}]);
  }
  useEffect(() => {
    fetch('https://localhost:7008/api/Products').then(response=>response.json()).then(data=>setProducts(data))
  },[]);
  return (
    <div className="App">
      <h1 style={{backgroundColor:'lightgreen'}}>Re-store</h1>
      <ul>
        {products.map((product,index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;
