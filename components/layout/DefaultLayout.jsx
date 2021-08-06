import Head from 'next/head';
import NavBar from "@/root/components/shared/NavBar";
import Footer from "@/root/components/shared/Footer";
import About from "@/root/components/shared/About";

export function DefaultLayout(props) {

  const {
    children,
    cartVisibility,
    onCartVisibility,
    cartItems,
    onCartDelete,
    onCartChange,
    device } = props;

  return (
    <>
      <Head>
        <title>audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar
        cartVisibility={cartVisibility}
        onCartVisibility={onCartVisibility}
        cartItems={cartItems}
        onCartChange={onCartChange}
        onCartDelete={onCartDelete}
      />
      {children}
      <Footer />
    </>
  )
}