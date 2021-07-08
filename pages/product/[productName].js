import Head from "next/head";
import ProductDetails from "../../components/ProductDetails";
import About from "../../components/About";

export default function ProductName() {
  return (
    <>
      <Head>
        <title>audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <ProductDetails />
      <About />
    </>
  )
}