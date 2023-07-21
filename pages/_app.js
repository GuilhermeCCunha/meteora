import React from 'react';
import GlobalStyles from '../styles/globalStyles';
import Footer from '../components/Footer';


export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}