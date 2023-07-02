import products_json from '../../json/products.json';
import { useEffect, useState } from 'react'
import React from 'react';

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const results = await fetch("/api/list");
            const resultsJson = await results.json();
            setProducts(resultsJson);
        })();
    }, []);

    return (
        <div >
            <h3 >Produtos que estão bombando!</h3>
            {products.map(product => (
                <div key={product._id}>
                    <img
                        src={`./images/Desktop/Imagens Cards/${product.img}.png`}
                        alt=""
                    />
                    <h5>{product.name} </h5>
                    <p>{product.description}</p>
                    <div>R$ {product.price},00</div>
                </div>
            ))}
        </div>
    );
}