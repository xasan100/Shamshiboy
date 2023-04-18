import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const adminDeleteFetch = createAsyncThunk('adminDeleteFetch', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}admin/${id}`, {
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
const adminDelete = createSlice({
    name: 'permissionsDelete',
    initialState,
    extraReducers: {
        [adminDeleteFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [adminDeleteFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = payload.message
            }
        },
        [adminDeleteFetch.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default adminDelete.reducer