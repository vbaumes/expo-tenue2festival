import { createSlice } from '@reduxjs/toolkit';

let initialState: { products: Array<Object> } = {
    products: []
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    set_products: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});
export const { set_products } = wishlistSlice.actions;
export const wishlistSliceReducer = wishlistSlice.reducer;