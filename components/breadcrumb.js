import { useSelector } from "react-redux";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Breadcrumb = () => {
  const { isHome, internTitle, internUrl } = useSelector(
    (state) => state.breadcrumb
  );

  return (
    <div className="flex">
      <Link href="/">
        <a>Home</a>
      </Link>
      {!isHome && (
        <>
          <ChevronRightIcon className="w-5 h-5 mt-[4px]" />
          <Link href={internUrl}>
            <a>{internTitle}</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
