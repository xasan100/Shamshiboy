import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch data
export const roleGetFetch = createAsyncThunk("roleGetFetch", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}role/`);
    return response.data;
   
});
// Define the initial state of the slice
const initialState = {
    data: {},
    status: null,
    error: null,
};

const roleGet = createSlice({
    name: "RoleGet",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder.addCase(roleGetFetch.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(roleGetFetch.fulfilled, (state, action) => {
            if (action.payload.status === true) {
                state.status = 'success'
                state.data = action?.payload?.roles;
            }

        });
        builder.addCase(roleGetFetch.rejected, (state, action) => {
            action.payload.status = false;
            state.status = 'notFound'
            state.error = action.error.message;
        });
    },
});

export default roleGet.reducer;

