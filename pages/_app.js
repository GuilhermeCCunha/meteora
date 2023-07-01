import React from 'react';
import Header from '../components/Header';
import GlobalStyles from '../globalStyles';
import Carousel from '../components/Carousel';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Carousel />
            <Component {...pageProps} />
        </>
    );
}