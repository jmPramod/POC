import Image from 'next/image';
import HomePage from './pages/Home/Home';
import Product from './product/Product';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Product /> */}
      <HomePage />
      {/* <img
        src="https://sophiafiori.com/wp-content/uploads/2023/07/187259_42_20_Y_0_QAA_CM-130x130.jpg"
        alt="Girl in a jacket"
        width="500"
        height="600"
      /> */}
    </>
  );
}
