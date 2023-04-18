
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    status: null,
    message: null,
};

export const categoryPostFetch = createAsyncThunk('categoryPostFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}category/add`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            name: payload.name,
            icon: the_image,
            children: [],
        })
    }).then((res) => res.json())
})

// Define the slice and reducers
const categoryPost = createSlice({
    name: 'permissionPost',
    initialState,
    reducers: {},
    extraReducers: {
        [categoryPostFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [categoryPostFetch.fulfilled]: (state, { payload }) => {
            if (payload.actions.status === true) {
                state.status = 'success'
                Cookies.set('accessToken', payload?.token)
            }
            else if (payload.actions.status === false) {
                state.status = 'notFound'
                state.message == payload?.message
            }
        },
        [categoryPostFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetperCategoryPost(state) {
            state.data = []
            state.status = null
        }
    }
});
export const { resetperCategoryPost } = categoryPost.actions
export default categoryPost.reducer;

