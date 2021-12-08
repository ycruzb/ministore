import { useEffect } from "react";
import Head from "next/head";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import ProductItem from "../components/productItem";
import PHProductItem from "../components/phProductItem";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

const Home = () => {
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="w-full px-5 py-10">
      <Head>
        <title>Ministore | Store demo</title>
        <meta name="description" content="Ministore demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {error && (
        <div className="w-full text-center text-red-600 flex justify-center">
          <ExclamationCircleIcon className="text-red-600 w-5 h-5 mt-[3px] mr-[6px]" />{" "}
          An error has been occurred! Please, try again!
        </div>
      )}

      {!error && loading && (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {[...Array(20)].map((item, index) => (
            <PHProductItem key={index} />
          ))}
        </div>
      )}

      {!error && !loading && products.length === 0 && (
        <div className="w-full text-center flex justify-center">
          <ExclamationCircleIcon className="w-5 h-5 mt-[3px] mr-[6px]" />
          There are no products yet!
        </div>
      )}

      {!error && !loading && products.length > 0 && (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
