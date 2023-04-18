import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const permissionsDeleteFetch = createAsyncThunk('permissionsDeleteFetch', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}permission/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
}
const permissionsDelete = createSlice({
    name: 'permissionsDelete',
    initialState,
    extraReducers: {
        [permissionsDeleteFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [permissionsDeleteFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = payload.message
            }
        },
        [permissionsDeleteFetch.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default permissionsDelete.reducer