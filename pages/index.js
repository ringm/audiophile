import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <Hero />
    </>
  )
}
