import { createSlice } from '@reduxjs/toolkit';

let initialState: { category: number; categoryName: string; gender: number; product: Object; term: string } = {
    category: 0,
    categoryName: '',
    gender: 0,
    product: {},
    term: ''
};

export const linkToSlice = createSlice({
  name: 'linkTo',
  initialState,
  reducers: {
    set_category: (state, action) => {
      return { ...state, category: action.payload };
    },
    set_categoryName: (state, action) => {
      return { ...state, categoryName: action.payload };
    },
    set_gender: (state, action) => {
      return { ...state, gender: action.payload };
    },
    set_product: (state, action) => {
      return { ...state, product: action.payload}
    },
    set_term: (state, action) => {
      return { ...state, term: action.payload}
    }
  },
});
export const { set_category, set_categoryName, set_gender, set_product, set_term } = linkToSlice.actions;
export const linkToSliceReducer = linkToSlice.reducer;