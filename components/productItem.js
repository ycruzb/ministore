import Image from "next/image";
import { price_formatter } from "../utils/price_formatter";

const ProductItem = ({ product }) => {
  const { id, brand, model, imgUrl, price } = product;
  return (
    <div className="w-full flex gap-5">
      <div className="w-full relative max-w-[140px] mb-1">
        <Image
          alt={`${brand} ${model}`}
          src={imgUrl}
          layout="responsive"
          width={160}
          height={212}
        />
      </div>
      <div className="">
        <p className="text-lg font-semibold mb-1 product-brand">{brand}</p>
        <p className="text-sm mb-1 text-gray-500">{model}</p>
        <p className="text-base font-semibold">
          {price_formatter.format(price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
