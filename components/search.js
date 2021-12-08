import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  searchProducts,
  fetchProducts,
} from "../features/products/productsSlice";

let timer;

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchText(newValue);
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (newValue === "") {
        dispatch(fetchProducts());
      } else {
        dispatch(searchProducts(newValue));
      }
    }, 200);
  };

  return (
    <div className="container mx-auto mt-2 mb-8 flex justify-center md:justify-end bg-gray-50 px-2 py-2 rounded-md">
      <input
        className="border-gray-400 rounded-md w-full md:w-64"
        type="text"
        value={searchText}
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
