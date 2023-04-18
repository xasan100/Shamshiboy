
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    status: null,
    message: null,
};

export const adminAddFetch = createAsyncThunk('adminAddFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}admin/add`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            role: payload.role,
            password: payload.password,
            phone: payload.phone
        })
    })

        .then((res) => res.json())

})

// Define the slice and reducers
const adminAdd = createSlice({
    name: 'permissionPost',
    initialState,
    reducers: {},
    extraReducers: {
        [adminAddFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [adminAddFetch.fulfilled]: (state, { payload }) => {
            if (state.status = 'success') {
                Cookies.set('accessToken', payload?.token)
            }
            else if (state.status = 'notFound') {
                state.message == payload?.message
            }


        },
        [adminAddFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetadminAdd(state) {
            state.data = []
            state.status = null
        }
    }
});
export const { resetadminAdd } = adminAdd.actions
export default adminAdd.reducer;

