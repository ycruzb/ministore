import cartReducer, {
  addToCart,
  setColorCode,
  setStorageCode,
} from "../features/cart/cartSlice";

describe("Cart Reducer", () => {
  const initialState = {
    items: 0,
    sending: false,
    error: false,
    colorCode: 0,
    storageCode: 0,
  };

  it("should set the color code", () => {
    const action = {
      type: setColorCode.type,
      payload: 2000,
    };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      colorCode: 2000,
    });
  });

  it("should set the storage code", () => {
    const action = {
      type: setStorageCode.type,
      payload: 1000,
    };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      storageCode: 1000,
    });
  });

  it("Add to cart: should set sending to true and error to false on pending", () => {
    const action = { type: addToCart.pending.type };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      sending: true,
      error: false,
    });
  });

  it("Add to cart: should set items data, sending to false and error to false on fulfilled", () => {
    const action = { type: addToCart.fulfilled.type, payload: { count: 4 } };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      items: 4,
      sending: false,
      error: false,
    });
  });

  it("Add to cart: should set error to true and sending to false on rejected", () => {
    const action = { type: addToCart.rejected.type };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      sending: false,
      error: true,
    });
  });
});
