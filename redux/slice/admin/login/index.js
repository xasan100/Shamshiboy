
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    status: null,
    message: null,
};

export const loginPosFetch = createAsyncThunk('loginPosFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}admin/login`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email: payload.email,
            password: payload.password,
        })
    })

        .then((res) => res.json())

})

// Define the slice and reducers
const loginPost = createSlice({
    name: 'getAllData',
    initialState,
    reducers: {},
    extraReducers: {
        [loginPosFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [loginPosFetch.fulfilled]: (state, { payload }) => {
            if (payload.status === true) {
                state.status = 'success'
                Cookies.set('accessToken', payload?.token)
            }
            else if (payload.status === false) {
                state.status = 'notFound'
                state.message == payload?.message
            }


        },
        [loginPosFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
});

export default loginPost.reducer;

