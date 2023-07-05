import React from 'react';
import Header from '../components/Header';
import GlobalStyles from '../globalStyles';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Facilities from '../components/Facilities';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Carousel />
            <Categories/>
            <Products />
            <Facilities />
            <Component {...pageProps} />
        </>
    );
}