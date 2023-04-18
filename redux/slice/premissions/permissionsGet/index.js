import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch data
export const permissionsGetFetch = createAsyncThunk("permissionsGetFetch", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}permission/`);
    return response.data;
});

// Define the initial state of the slice
const initialState = {
    data: {},
    status: null,
    error: null,
};

const permissionsGet = createSlice({
    name: "permissionsGet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(permissionsGetFetch.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(permissionsGetFetch.fulfilled, (state, action) => {

            if (action.payload.status === true) {
                state.status = 'success'
                state.data = action?.payload?.permissions;
            }

        });
        builder.addCase(permissionsGetFetch.rejected, (state, action) => {
            action.payload.status === false
            state.status = 'notFound';
            state.error = action.error.message;
        });
    },

});

export default permissionsGet.reducer;

