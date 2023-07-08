import Head from "next/head";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Facilities from "../components/Facilities";
import Newsletter from "../components/Newsletter";
import Header from "../components/Header";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Head>
        <title>Meteora</title>
      </Head>
      <Header onQuery={setQuery} />
      <Carousel />
      <Categories />
      <Products query={query} />
      <Facilities />
      <Newsletter />
    </>
  )
}