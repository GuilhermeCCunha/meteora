import Head from "next/head";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Facilities from "../components/Facilities";
import Newsletter from "../components/Newsletter";
import { useState } from "react";

export default function Home({ query }) {
  const [category, setCategory] = useState("");

  return (
    <>
      <Head>
        <title>Meteora</title>
      </Head>
      <Carousel />
      <Categories category={category} setCategory={setCategory} />
      <Products query={query} category={category} />
      <Facilities />
      <Newsletter />
    </>
  )
}