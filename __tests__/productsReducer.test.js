import productsReducer, {
  fetchAllProducts,
  searchProducts,
} from "../features/products/productsSlice";

describe("Products Reducer", () => {
  const initialState = {
    products: [],
    loading: false,
    error: false,
  };

  it("Fetch all products: should set loading to true and error to false on pending", () => {
    const action = { type: fetchAllProducts.pending.type };
    const state = productsReducer(initialState, action);
    expect(state).toEqual({
      products: [],
      loading: true,
      error: false,
    });
  });

  it("Fetch all products: should set products data, loading to false and error to false on fulfilled", () => {
    const action = {
      type: fetchAllProducts.fulfilled.type,
      payload: [
        {
          id: "ZmGrkLRPXOTpxsU4jjAcv",
          brand: "Acer",
          model: "Iconia Talk S",
          price: "170",
          imgUrl:
            "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
        },
      ],
    };
    const state = productsReducer(initialState, action);
    expect(state).toEqual({
      loading: false,
      error: false,
      products: [
        {
          id: "ZmGrkLRPXOTpxsU4jjAcv",
          brand: "Acer",
          model: "Iconia Talk S",
          price: "170",
          imgUrl:
            "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
        },
      ],
    });
  });

  it("Fetch all products: should set error to true and loading to false on rejected", () => {
    const action = { type: fetchAllProducts.rejected.type };
    const state = productsReducer(initialState, action);
    expect(state).toEqual({
      products: [],
      loading: false,
      error: true,
    });
  });

  it("Search products: should set loading to true and error to false on pending", () => {
    const action = { type: searchProducts.pending.type };
    const state = productsReducer(initialState, action);
    expect(state).toEqual({
      products: [],
      loading: true,
      error: false,
    });
  });

  it("Search products: should set products data, loading to false and error to false on fulfilled", () => {
    const action = {
      type: searchProducts.fulfilled.type,
      payload: [
        {
          id: "ZmGrkLRPXOTpxsU4jjAcv",
          brand: "Acer",
          model: "Iconia Talk S",
          price: "170",
          imgUrl:
            "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
        },
      ],
    };
    const state = productsReducer(initialState, action);
    expect(state).toEqual({
      loading: false,
      error: false,
      products: [
        {
          id: "ZmGrkLRPXOTpxsU4jjAcv",
          brand: "Acer",
          model: "Iconia Talk S",
          price: "170",
          imgUrl:
            "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
        },
      ],
    });
  });

  it("Search products: should set error to true and loading to false on rejected", () => {
    const action = { type: searchProducts.rejected.type };
    const state = productsReducer(initialState, action);
    expect(state).toEqual({
      products: [],
      loading: false,
      error: true,
    });
  });
});
