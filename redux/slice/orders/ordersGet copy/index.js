import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch data
export const ordersGetFetch = createAsyncThunk("ordersGetFetch", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}orders`);
    return response.data;
});

// Define the initial state of the slice
const initialState = {
    data: [],
    status: null,
    error: null,
};

const ordersGet = createSlice({
    name: "ordersGet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ordersGetFetch.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(ordersGetFetch.fulfilled, (state, action) => {
            if (state.status = 'success') {
            state.data = action?.payload;
            }
            else if (state.status === 'notFound')
                state.error = action?.message;
        });
        builder.addCase(ordersGetFetch.rejected, (state, action) => {
            state.loading = 'error';
            state.error = action?.message;
        });
    },});

export default ordersGet.reducer;

