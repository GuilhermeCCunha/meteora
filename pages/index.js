import Head from "next/head";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Facilities from "../components/Facilities";
import Newsletter from "../components/Newsletter";


export default function Home() {
  return (
    <>
      <Head>
        <title>Meteora</title>
      </Head>
      <Carousel />
      <Categories />
      <Products />
      <Facilities />
      <Newsletter />
    </>
  )
}