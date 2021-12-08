import { API_BASE_PATH } from "../../utils/constants";
import Head from "next/head";
import Image from "next/image";
import { price_formatter } from "../../utils/price_formatter";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const ProductDetailPage = (props) => {
  const {
    brand,
    model,
    imgUrl,
    price,
    dimentions,
    weight,
    options: { colors, storages },
  } = props.data;
  return (
    <>
      <nav className="w-full px-5 py-5">
        <Link href="/">
          <a>
            <ArrowLeftIcon className="w-5 h-5 inline-block pr-1" /> Go back
          </a>
        </Link>
      </nav>
      <section className="flex flex-col md:flex-row px-5 py-5 justify-between gap-16">
        <Head>
          <title>
            {brand} {model} | Ministore
          </title>
          <meta
            name="description"
            content={`${brand} ${model} at Ministore demo`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full md:w-2/5 relative order-2 md:order-1">
          <Image
            alt={`${brand} ${model}`}
            src={imgUrl}
            layout="responsive"
            width={160}
            height={212}
          />
        </div>
        <div className="w-full md:w-3/5 order-1 md:order-2">
          <p className="w-full text-2xl font-semibold mb-2">{brand}</p>
          <p className="w-full text-lg text-gray-500 mb-2">{model}</p>
          <p className="w-full text-xl font-semibold mb-3">
            {price_formatter.format(price)}
          </p>
          <p className="w-full text-base mb-2 text-gray-500">
            <span className="font-semibold text-gray-700">
              Dimentions
              <br />
            </span>
            {dimentions}
          </p>
          <p className="w-full text-base mb-2 text-gray-500">
            <span className="font-semibold text-gray-700">
              Weight
              <br />
            </span>
            {weight}
          </p>
          <div className="w-full mb-2">
            <span className="font-semibold text-gray-700 block mb-1">
              Colors
              <br />
            </span>
            <select className="rounded-md py-1" name="" id="">
              {colors.map((color) => (
                <option key={color.code} value={color.code}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full mb-6">
            <span className="font-semibold text-gray-700 block mb-1">
              Storages
              <br />
            </span>
            <select className="rounded-md py-1" name="" id="">
              {storages.map((storage) => (
                <option key={storage.code} value={storage.code}>
                  {storage.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <button className="text-base text-white bg-blue-700 px-8 py-2 rounded-md hover:bg-blue-800 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const res = await fetch(`${API_BASE_PATH}/product/${context.params.id}`);
  const data = await res.json();

  if (data.code === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
