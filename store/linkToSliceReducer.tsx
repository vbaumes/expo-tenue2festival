import { createSlice } from '@reduxjs/toolkit';

let initialState: { category: string; gender: string; product: Object } = {
    category: '',
    gender: '',
    product: {}
};

export const linkToSlice = createSlice({
  name: 'linkTo',
  initialState,
  reducers: {
    set_category: (state, action) => {
      return { ...state, category: action.payload };
    },
    set_gender: (state, action) => {
      return { ...state, gender: action.payload };
    },
    set_product: (state, action) => {
      return { ...state, product: action.payload}
    }
  },
});
export const { set_category, set_gender, set_product } = linkToSlice.actions;
export const linkToSliceReducer = linkToSlice.reducer;