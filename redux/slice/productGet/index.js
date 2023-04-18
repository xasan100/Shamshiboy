import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch data
export const getAllProductFetch = createAsyncThunk("getAllProductFetch", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}products/`);
    return response.data;
});

// Define the initial state of the slice
const initialState = {
    data: {},
    status: null,
    error: null,
};

const getAllProduct = createSlice({
    name: "getAllProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProductFetch.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(getAllProductFetch.fulfilled, (state, action) => {
            if (action.payload.status === true) {
                state.status = 'success'
                state.data = action?.payload?.products;
            }

        });
        builder.addCase(getAllProductFetch.rejected, (state, action) => {
            action.payload.status === true
            state.status = 'notFound';
            state.error = action.error.message;
        });
    },
});

export default getAllProduct.reducer;

