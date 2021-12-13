import { Product } from "../../app/model/product";
import { Grid } from "@mui/material";
import ProductCard from './ProductCard';


type props = { products: Product[] }
export default function ProductList({ products }: props) {
    return (
        <>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
