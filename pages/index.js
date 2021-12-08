import { useEffect } from "react";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <div className="">
      <Head>
        <title>Ministore</title>
        <meta name="description" content="Ministore demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
