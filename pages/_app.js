import React from 'react';
import Header from '../components/Header';
import GlobalStyles from '../globalStyles';
import Footer from '../components/Footer';


export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}