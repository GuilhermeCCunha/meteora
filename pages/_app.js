import React from 'react';
import GlobalStyles from '../globalStyles';
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