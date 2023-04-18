
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    status: null,
    message: null,
};

export const permissionPostFetch = createAsyncThunk('permissionPostFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}permission/add`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            name: payload.name,

        })
    })

        .then((res) => res.json())

})

// Define the slice and reducers
const permissionPost = createSlice({
    name: 'permissionPost',
    initialState,
    reducers: {},
    extraReducers: {
        [permissionPostFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [permissionPostFetch.fulfilled]: (state, { payload }) => {
            if (state.status = 'success') {
                Cookies.set('accessToken', payload?.token)
            }
            else if (state.status = 'notFound') {
                state.message == payload?.message
            }


        },
        [permissionPostFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetperPermissionPost(state) {
            state.data = []
            state.status = null
        }
    }
});
export const { resetperPermissionPost } = permissionPost.actions
export default permissionPost.reducer;

