import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch data
export const shopGetFetch = createAsyncThunk("shopGetFetch", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}shop/`);
    return response.data;
});

// Define the initial state of the slice
const initialState = {
    data: {},
    status: null,
    error: null,
};

const shopGet = createSlice({
    name: "shopGet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(shopGetFetch.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(shopGetFetch.fulfilled, (state, action) => {
            if (action.payload.status === true) {
                state.status = 'success'
                state.data = action?.payload?.shops;
            }

        });
        builder.addCase(shopGetFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default shopGet.reducer;

