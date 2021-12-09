import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import useScrollPosition from "../hooks/useScrollPosition";
import { useSelector } from "react-redux";
import Breadcrumb from "../components/breadcrumb";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const { items } = useSelector((state) => state.cart);

  const headerClass =
    scrollPosition < 10
      ? `w-full px-5 py-4 flex justify-between border-b border-gray-200 sticky top-0 z-50 bg-white`
      : `w-full px-5 py-4 flex justify-between border-b border-gray-200 sticky top-0 z-50 bg-white/60 transition duration-200 backdrop-filter backdrop-blur-lg shadow-lg`;
  return (
    <header className={headerClass}>
      <div className="">
        <Link href="/">
          <a className="text-2xl block">Ministore</a>
        </Link>
      </div>
      <div className="mt-1 hidden md:block">
        <Breadcrumb />
      </div>
      <div className="relative">
        <ShoppingCartIcon className="text-gray-700 w-6 h-6 mt-[6px]" />
        {items > 0 && (
          <div className="absolute top-[-2px] right-[-10px] text-white bg-red-700 rounded-full text-sm px-[7px]">
            {items}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
