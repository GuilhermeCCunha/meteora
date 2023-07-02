import React from 'react';
import Header from '../components/Header';
import GlobalStyles from '../globalStyles';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Products from '../components/Products';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Carousel />
            <Categories/>
            <Products />
            <Component {...pageProps} />
        </>
    );
}