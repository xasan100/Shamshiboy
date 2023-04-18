import {createSlice} from '@reduxjs/toolkit'


const messageSlice = createSlice({
    name: 'messageFunc',
    initialState: {
        hiddenBool: false,
        time: 0,
        message: '',
        type: 'warning'
    },
    reducers:{
        startMessage(state, action){
            const {message, time, type} = action.payload
            const timeSeconds = time * 1000
            state.hiddenBool = true
            state.type = 'warning'
            if(state.type) {
                state.type = type
            }
            if(state.hiddenBool){
                state.message = message
                state.time = timeSeconds
            }
        },
        resetAllData(state, action){
            state.hiddenBool = false
            state.type = ''
            state.time = 0
            state.message = ''
        }
    }
})


export const { startMessage, resetAllData } = messageSlice.actions
export default messageSlice.reducer