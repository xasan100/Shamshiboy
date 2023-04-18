
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    status: null,
    message: null,
};

export const adminPutFetch = createAsyncThunk('adminPutFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}admin/${payload.id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
            name: payload.name,
            email: payload.name,
            role: payload.role,
            password: payload.password,
            phone: payload.phone,
            image: "link_to_image",


        })
    })

        .then((res) => res.json())

})

// Define the slice and reducers
const adminPut = createSlice({
    name: 'permissionPut',
    initialState,
    reducers: {},
    extraReducers: {
        [adminPutFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [adminPutFetch.fulfilled]: (state, { payload }) => {
            if (state.status = 'success') {
                Cookies.set('accessToken', payload?.token)
            }
            else if (state.status = 'notFound') {
                state.message == payload?.message
            }


        },
        [adminPutFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetperadminPut(state) {
            state.data = []
            state.status = null
        }
    }
});
export const { resetperadminPut } = adminPut.actions
export default adminPut.reducer;

