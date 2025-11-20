import axios from 'axios';
import { useEffect, useState } from 'react';
import { Headers } from '../../Components/Headers';
 
import {ProductsGrid} from './productsGrid'
import './HomePage.css';

export function HomePage({cart}) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);

            })
    },[])


    return (
        <>

            <title>e-commerce Project</title>

            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <Headers cart={cart}/>

            <div className="home-page">
                <ProductsGrid products={products}/>
            </div>
        </>
    );
}