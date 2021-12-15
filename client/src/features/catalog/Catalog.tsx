import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../app/model/product";
import ProductList from './ProductList';

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://localhost:7008/api/products`)
        .then(response=>setProducts(response.data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false));
      }, []);
    if (loading) return <Typography variant='h4'>Loading...</Typography>
    if (!products) return <Typography variant='h4'>Products not found.</Typography>

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}
