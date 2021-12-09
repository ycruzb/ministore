import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: true,
  internTitle: "",
  internUrl: "",
};

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setHomePage: (state) => {
      state.isHome = true;
    },
    setInternPage: (state, action) => {
      state.isHome = false;
      state.internTitle = action.payload.title;
      state.internUrl = action.payload.url;
    },
  },
});

export const { setHomePage, setInternPage } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
