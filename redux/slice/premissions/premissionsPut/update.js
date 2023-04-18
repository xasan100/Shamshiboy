
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    status: null,
    message: null,
};

export const permissionPutFetch = createAsyncThunk('permissionPutFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}permission/${payload.id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
            name: payload.name,

        })
    })

        .then((res) => res.json())

})

// Define the slice and reducers
const permissionPut = createSlice({
    name: 'permissionPut',
    initialState,
    reducers: {},
    extraReducers: {
        [permissionPutFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [permissionPutFetch.fulfilled]: (state, { payload }) => {
            if (state.status = 'success') {
                Cookies.set('accessToken', payload?.token)
            }
            else if (state.status = 'notFound') {
                state.message == payload?.message
            }


        },
        [permissionPutFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetperPermissionPut(state) {
            state.data = []
            state.status = null
        }
    }
});
export const { resetperPermissionPut } = permissionPut.actions
export default permissionPut.reducer;

