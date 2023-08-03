import React from 'react';
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';


export default function App({ Component, pageProps }) {
    const [query, setQuery] = useState("");

    return (
        <>
            <GlobalStyles />
            <Header onQuery={setQuery} />
            <Component {...pageProps} query={query} />
            <Footer />
        </>
    );
}