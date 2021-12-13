import { useEffect, useState } from "react";
import { Product } from "../../app/model/product";
import ProductList from './ProductList';

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('https://localhost:7008/api/Products').then(response => response.json()).then(data => setProducts(data))
      }, []);
    return (
        <>
            <ProductList products={products}/>
        </>
    )
}
