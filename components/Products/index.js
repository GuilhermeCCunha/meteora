import products_json from '../../json/products.json';
import { useEffect, useState } from 'react'
import React from 'react';
import ProductModal from '../ProductModal';
import { ProductsDiv, ProductsTitle, Item, TextDiv, Flex, ProductName, ProductDescription, ProductPrice, ProductButton } from "./styles"

export default function Products({ query, category }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const results = await fetch("/api/list");
            const resultsJson = await results.json();
            setProducts(resultsJson);
        })();
    }, []);
    const [modalStatus, setModalStatus] = useState(false)
    const [activatedProduct, setActivatedProduct] = useState({
        _id: 0,
        name: '',
        description: '',
        price: 0,
        img: ''
    });
    let search = query
    let selectedCategory = category
    return (
        <ProductsDiv>
            <ProductsTitle>Produtos que estão bombando!</ProductsTitle>
            <Flex>
                {products.filter((product) => { return product.name.toLowerCase().includes(search.toLowerCase()) })
                    .filter((product) => { return product.category.toLowerCase().includes(selectedCategory.toLowerCase()) })
                    .map((product) => (
                        <Item key={product._id}>
                            <img
                                src={product.img.includes("//") ? `${product.img}` : `./images/desktop/Imagens Cards/${product.img}.png`}
                                alt={product.name}
                            />
                            <TextDiv>
                                <ProductName>{product.name} </ProductName>
                                <ProductDescription>{product.description}</ProductDescription>
                                <ProductPrice>R$ {product.price},00</ProductPrice>
                                <div>
                                    <ProductButton
                                        onClick={() => {
                                            setActivatedProduct(product);
                                            setModalStatus(true);
                                        }}
                                    >Ver mais</ProductButton>
                                </div>
                            </TextDiv>
                        </Item>
                    ))}
            </Flex>
            {modalStatus ? <ProductModal _id={activatedProduct._id} name={activatedProduct.name} description={activatedProduct.description} price={activatedProduct.price} img={activatedProduct.img} onClose={() => setModalStatus(false)} /> : null}
        </ProductsDiv>
    );
}