import { useEffect } from "react";
import Head from "next/head";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import ProductList from "../components/productList";
import ProductItem from "../components/productItem";
import PHProductItem from "../components/phProductItem";
import Search from "../components/search";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../features/products/productsSlice";
import { setSearchText } from "../features/products/searchSlice";
import { setHomePage } from "../features/breadcrumb/breadcrumbSlice";

const Home = () => {
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHomePage());
    dispatch(setSearchText(""));
    dispatch(fetchAllProducts());
  }, []);

  return (
    <section className="w-full px-5 pt-4 pb-10">
      <Head>
        <title>Ministore | Store demo</title>
        <meta name="description" content="Ministore demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />

      {error && (
        <div className="w-full text-center text-red-600 flex justify-center">
          <ExclamationCircleIcon className="text-red-600 w-5 h-5 mt-[3px] mr-[6px]" />{" "}
          An error has been occurred! Please, try again!
        </div>
      )}

      {!error && loading && (
        <ProductList>
          {[...Array(20)].map((item, index) => (
            <PHProductItem key={index} />
          ))}
        </ProductList>
      )}

      {!error && !loading && products.length === 0 && (
        <div className="w-full text-center flex justify-center">
          <ExclamationCircleIcon className="w-5 h-5 mt-[3px] mr-[6px]" />
          There are no products to show!
        </div>
      )}

      {!error && !loading && products.length > 0 && (
        <ProductList>
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <a>
                <ProductItem product={product} />
              </a>
            </Link>
          ))}
        </ProductList>
      )}
    </section>
  );
};

export default Home;
