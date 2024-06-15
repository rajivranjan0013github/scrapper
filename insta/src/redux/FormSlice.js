import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../Data";
const initialState = {
  formData: {},
};
export const createAccount = createAsyncThunk(
  "form/update-form",
  async (payload, { getState, dispatch }) => {
    const { formData } = getState().form;
    const response = await fetch("http://localhost:3000/api/addData/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  }
);
const FromSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});
export const { updateFormData } = FromSlice.actions;

export default FromSlice.reducer;
