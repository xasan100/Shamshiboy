import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch data
export const adminGetFetch = createAsyncThunk("adminGetFetch", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}admin`);
    return response.data;
});

// Define the initial state of the slice
const initialState = {
    data: {},
    status: null,
    error: null,
};

const adminGet = createSlice({
    name: "permissionsGet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminGetFetch.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(adminGetFetch.fulfilled, (state, action) => {

            if (action.payload.status === true) {
                state.status = 'success'
                state.data = action?.payload?.admins;
            }

        });
        builder.addCase(adminGetFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },

});

export default adminGet.reducer;

