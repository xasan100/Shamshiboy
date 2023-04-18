import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch data
export const categoryGetFetch = createAsyncThunk("categoryGetFetch", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}category/`);
    return response.data;
});

// Define the initial state of the slice
const initialState = {
    data: {},
    status: null,
    error: null,
};

const categoryGet = createSlice({
    name: "categoryGet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(categoryGetFetch.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(categoryGetFetch.fulfilled, (state, action) => {
            if (action?.payload.status === true) {
                state.status = 'success'
                state.data = action?.payload?.categories;
            }
            else if (action?.payload.status === true)
                state.status === 'notFound'
            state.error = action?.message;
        });
        builder.addCase(categoryGetFetch.rejected, (state, action) => {
            state.loading = 'error';
            state.error = action?.message;
        });
    },
});

export default categoryGet.reducer;

