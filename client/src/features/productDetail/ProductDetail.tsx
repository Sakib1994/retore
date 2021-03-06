import React, { useState } from 'react'
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Product } from '../../app/model/product';
import axios from 'axios';

export default function ProductDetail() {
    let { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        axios.get(`https://localhost:7008/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Typography variant='h4'>Loading...</Typography>
    if (!product) return <Typography variant='h4'>Product not found.</Typography>
    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={product.pictureUrl} alt={product.name} title={product.name} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h3'>{product.name}</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant='h4' color='secondary'>{(product.price / 100).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>{product.type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Quantity in stock</TableCell>
                                    <TableCell>{product.quantityInStock}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        </>
    )
}
