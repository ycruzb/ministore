import { useSelector, useDispatch } from "react-redux";

import {
  searchProducts,
  fetchAllProducts,
} from "../features/products/productsSlice";

import { setSearchText } from "../features/products/searchSlice";

let timer;

const Search = () => {
  const { searchText } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(setSearchText(newValue));
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (newValue === "") {
        dispatch(fetchAllProducts());
      } else {
        dispatch(searchProducts(newValue));
      }
    }, 200);
  };

  return (
    <div className="container mx-auto mt-2 mb-8 flex justify-center md:justify-end bg-gray-50 px-2 py-2 rounded-md">
      <input
        className="border-gray-400 rounded-md w-full md:w-64 search-input"
        type="text"
        value={searchText}
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
